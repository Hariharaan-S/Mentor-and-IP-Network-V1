# Function to add a box to the canvas
import os
from matplotlib import pyplot as plt
from matplotlib.patches import Rectangle
import spacy


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

# Function to add a box to the canvas with modern design
def add_box(ax, title, content, coords, facecolor='#E6F7FF', edgecolor='#007ACC'):
    x, y, width, height = coords
    ax.add_patch(Rectangle((y, x), height, width, edgecolor=edgecolor, facecolor=facecolor, lw=2))
    ax.text(y + 0.1, x + width - 0.2, title, fontsize=13, verticalalignment='top', fontweight='bold', color='#003366')
    ax.text(y + 0.1, x + width - 0.6, content, fontsize=11, verticalalignment='top', wrap=True)

# Function to generate a modern Lean Canvas
def generate_lean_canvas(canvas_data):
    fig, ax = plt.subplots(figsize=(12, 8))
    
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
    
    # Adding boxes to canvas
    for box in canvas_boxes:
        add_box(ax, box["title"], box["content"], box["coords"])

    # Final adjustments for aesthetics
    ax.set_xlim(0, 9)
    ax.set_ylim(0, 6)
    ax.axis('off')

    # Save the figure to a file
    output_path = os.path.join("static", "lean_canvas.png")
    plt.title("Modern Lean Canvas", fontsize=18, color='#003366', fontweight='bold')
    plt.savefig(output_path, bbox_inches='tight')
    plt.close()

    return output_path