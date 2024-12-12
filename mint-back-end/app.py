from flask import Flask, redirect, render_template, request, url_for, session
import boto3
import uuid
from flask_sqlalchemy import SQLAlchemy 
from lean_canvas_flask_server import generate_lean_canvas
from utils import chat_with_bot
import mysql.connector
import uuid
from flask_cors import CORS
from flask_googletrans import translator


ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

db = SQLAlchemy()
mysql_db = mysql.connector.connect(
    host="localhost",
    username="root",
    password="devahari",
    database="mint"
)

class File(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    original_filename = db.Column(db.String(100))
    filename = db.Column(db.String(100))
    bucket = db.Column(db.String(100))
    region = db.Column(db.String(100))

app = Flask(__name__)

ts = translator(app)



CORS(app)

app.secret_key = "AbCdEfjrjrj45554xzzxz"

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite3"

db.init_app(app)
with app.app_context():
    db.create_all()

cursor = mysql_db.cursor()


################################ ROUTES #####################################


@app.route("/auth/login", methods=["POST"])
def auth_login():
    body = request.json
    username = body.get('username')
    password = body.get('password')
    role = body.get('role')

    # Validate input
    if not username or not password or not role:
        return {"message": "Username, password, and role are required", "statusCode": 400}

    try:
        # Query database for user
        cursor.execute(
            "SELECT username, password, role FROM user_register WHERE username=%s AND role=%s", 
            (username, role)
        )
        result = cursor.fetchone()

        if result:
            stored_username, stored_password, stored_role = result

            # Check if the password matches
            if password == stored_password:
                session['user'] = stored_username
                session['role'] = stored_role
                return {"message": "Login successful", "statusCode": 200}
            else:
                return {"message": "Invalid password", "statusCode": 401}
        else:
            return {"message": "Invalid username or role", "statusCode": 401}

    except Exception as e:
        print(f"Error during login: {e}")
        return {"message": "Internal server error", "statusCode": 500}


@app.route("/registertodatabase",methods=["POST"])
def registertodatabase():
    details = request.json
    id = uuid.uuid4().hex
    username = details.get('username')
    password = details.get('password')
    role = details.get('role')
    experience = details.get('experience')
    domain = details.get('domain')
    budget = details.get('budget')


    session['user'] = username
    session['role'] = role

    print({id, username, password, role, domain, experience, budget})
    cursor.execute(
            "INSERT INTO user_register (user_id, username, password, role, domain, experience, budget) VALUES (%s,%s,%s,%s,%s,%s,%s)", 
            (id, username, password, role, domain, experience, budget)
        )
    mysql_db.commit()
    return {"message":"success", "statusCode": 200}

@app.route("/find-mentor", methods=["POST"])
def find_mentor():
    mentor_domain = request.json.get('domain')
    print(mentor_domain)  # the domain provided by the client
    cursor.execute("SELECT username, domain FROM user_register WHERE domain = %s and role = 'mentor'", (mentor_domain,))
    result = cursor.fetchall()

    print(result)
    session['mentors'] = result
    return 'success',200
    

@app.route("/display-details")
def display_details():
    details = session.get('details')
    cursor.execute("select username,budget from user_register where role ='investor'")
    result = cursor.fetchall()
    session['investors'] = result
    print(result)
    return render_template('startup_submitted_form.html',user=session['user'], form_data=details, investors = session['investors'])

@app.route("/startup-details-submit", methods=["POST"])
def startup_details_submit():
    details = request.json
    session["details"] = details
    return "Success", 200

@app.route("/add/ip", methods=["POST"])
def add_ip():
    if request.method == "POST":
        category = request.form.get('category')
        uploaded_file = request.files.get('document')
        if not allowed_file(uploaded_file.filename):
            return "FILE NOT ALLOWED!"

        new_filename = uuid.uuid4().hex + '.' + uploaded_file.filename.rsplit('.', 1)[1].lower()

        bucket_name = "ipr-repository"
        s3 = boto3.resource("s3")
        s3.Bucket(bucket_name).upload_fileobj(uploaded_file, category + "/" + new_filename)

        file = File(original_filename=uploaded_file.filename, filename=new_filename,
            bucket=bucket_name, region="ap-southeast-1")

        db.session.add(file)
        db.session.commit()

    return {"message":"Success"}, 200

@app.route("/get/ip", methods=["GET"])
def get_ip():
    files = File.query.all()
    return render_template("iprepository.html", files=files,user=session['user'])

@app.route("/get", methods=["GET", "POST"])
def chat():
    msg = request.form["msg"]
    input = msg
    return chat_with_bot(input.lower())

@app.route('/submit_lean_canvas', methods=['POST'])
def submit_lean_canvas():
    canvas_data = {
        'Problem': request.form.get('problem'),
        'Customer Segments': request.form.get('customer_segments'),
        'Unique Value Proposition': request.form.get('unique_value_proposition'),
        'Solution': request.form.get('solution'),
        'Channels': request.form.get('channels'),
        'Revenue Streams': request.form.get('revenue_streams'),
        'Cost Structure': request.form.get('cost_structure'),
        'Key Metrics': request.form.get('key_metrics'),
        'Unfair Advantage': request.form.get('unfair_advantage')
    }

    canvas_image_url = url_for('static', filename=f'lean_canvas.png')

    return render_template('lean_canvas.html', canvas_image=canvas_image_url)

if __name__ == '__main__':
    app.run(debug=True)