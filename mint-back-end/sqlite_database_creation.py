import sqlite3

# Connect to SQLite database (creates database file if it doesn't exist)
connection = sqlite3.connect('sqlite3.db')

# # Create a cursor object
cursor = connection.cursor()

# # Create a table
# cursor.execute('''
#     CREATE TABLE IF NOT EXISTS employees (
#         id INTEGER PRIMARY KEY,
#         name TEXT,
#         department TEXT,
#         salary REAL
#     )
# ''')

# # Commit changes
# connection.commit()

# # Close the connection
# connection.close()

cursor.execute("DELETE FROM file")

print("SQLite database created successfully.")
