import spacy
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

# Load the spaCy English model
nlp = spacy.load("en_core_web_sm")

# Define keywords for each Lean Canvas section
keywords = {
    'Problem': ['problem', 'pain point', 'issue', 'challenge'],
    'Customer Segments': ['customer', 'audience', 'target market', 'segment'],
    'Unique Value Proposition': ['unique value', 'differentiator', 'unique', 'value proposition'],
    'Solution': ['solution', 'fix', 'product', 'service'],
    'Channels': ['channel', 'distribution', 'reach'],
    'Revenue Streams': ['revenue', 'income', 'monetize'],
    'Cost Structure': ['cost', 'expenses', 'overhead'],
    'Key Metrics': ['metrics', 'measure', 'success indicator'],
    'Unfair Advantage': ['advantage', 'edge', 'competitor', 'unfair']
}

# Clarification questions if any section is missing
clarification_questions = {
    'Problem': "What problem are you solving?",
    'Customer Segments': "Who are your target customers or audience?",
    'Unique Value Proposition': "What makes your solution unique?",
    'Solution': "How do you plan to solve the problem?",
    'Channels': "How will you reach your customers?",
    'Revenue Streams': "How do you plan to generate revenue?",
    'Cost Structure': "What are the major costs involved?",
    'Key Metrics': "What are the key performance metrics?",
    'Unfair Advantage': "Do you have any unique or unfair advantage over competitors?"
}

# Function to extract information using NLP and keyword matching
def parse_business_idea_nlp(idea_summary):
    doc = nlp(idea_summary.lower())
    canvas_data = {section: '' for section in keywords}

    # Matching sentences with each Lean Canvas section
    for sentence in doc.sents:
        for section, kw_list in keywords.items():
            if any(kw in sentence.text for kw in kw_list):
                canvas_data[section] += sentence.text.strip() + " "
    
    return canvas_data

# Function to ask clarification questions for missing sections
def clarify_missing_sections(canvas_data):
    for section, content in canvas_data.items():
        if not content.strip():  # If the section is empty
            clarification = input(f"{clarification_questions[section]} ")
            canvas_data[section] = clarification

# Function to add a box to the canvas
def add_box(ax, title, content, coords, facecolor='#ADD8E6'):
    x, y, width, height = coords
    ax.add_patch(Rectangle((y, x), height, width, edgecolor='black', facecolor=facecolor))
    ax.text(y + 0.1, x + width - 0.1, title, fontsize=12, verticalalignment='top', fontweight='bold')
    ax.text(y + 0.1, x + width - 0.3, content, fontsize=10, verticalalignment='top', wrap=True)

# Function to generate Lean Canvas from parsed data
def generate_lean_canvas(canvas_data):
    fig, ax = plt.subplots(figsize=(10, 7))

    canvas_boxes = [
        {"title": "Problem", "content": canvas_data['Problem'], "coords": (0, 5, 2, 3)},
        {"title": "Customer Segments", "content": canvas_data['Customer Segments'], "coords": (0, 0, 2, 3)},
        {"title": "Unique Value Proposition", "content": canvas_data['Unique Value Proposition'], "coords": (2, 5, 2, 3)},
        {"title": "Solution", "content": canvas_data['Solution'], "coords": (2, 0, 1, 2)},
        {"title": "Channels", "content": canvas_data['Channels'], "coords": (3, 0, 1, 2)},
        {"title": "Revenue Streams", "content": canvas_data['Revenue Streams'], "coords": (4, 0, 1, 2)},
        {"title": "Cost Structure", "content": canvas_data['Cost Structure'], "coords": (4, 5, 1, 2)},
        {"title": "Key Metrics", "content": canvas_data['Key Metrics'], "coords": (5, 5, 1, 2)},
        {"title": "Unfair Advantage", "content": canvas_data['Unfair Advantage'], "coords": (5, 0, 1, 2)},
    ]

    for box in canvas_boxes:
        add_box(ax, box["title"], box["content"], box["coords"])

    ax.set_xlim(0, 9)
    ax.set_ylim(0, 6)
    ax.axis('off')

    plt.title("Lean Canvas Model", fontsize=16)
    plt.show()

# Main function to interact with the user
def ask_for_business_idea():
    print("Welcome! Let's build your Lean Canvas.")
    print("Please provide a brief summary of your business idea (You can include problem, solution, customers, revenue model, etc.):")
    
    idea_summary = input("Enter your business idea summary here: ")
    
    # Extract key information from the summary using NLP
    lean_canvas_data = parse_business_idea_nlp(idea_summary)
    
    # Clarify missing sections
    clarify_missing_sections(lean_canvas_data)
    
    # Generate and display the Lean Canvas
    generate_lean_canvas(lean_canvas_data)

if __name__ == "__main__":
    ask_for_business_idea()
