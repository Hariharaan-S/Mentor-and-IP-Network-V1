import random
user_responses={}
capture=[]

patterns = {
    'name': ['I am a chatbot.\nI go by the name Mintbot.'],
    '@': ["You'll receive your personalized Documentation\nin your email shortly.\nIf you have any more questions or need further assistance,\nfeel free to ask."],
    'link':["https://shorturl.at/fgoFX"],'access':["1. Ayurveda center (3 km)\n2.Senji Ayurveda clinic   (4.2 km)"],
    'thank': ["Thank you, hope it was helpful"],
    'bye': ['Until we meet again, goodbye!', 'See you later!', 'Have a great day!','Goodbye for now! Take care....'],
}

patent_database = {
    "123456": "Under Examination",
    "654321": "Granted",
    "112233": "Pending Review"
}

mentors = ["Abhishek Sharma", "Rahul K", "Sai Mishra"]
funding_opportunities = ["Seed Funding", "Government Grants", "VC Investors"]

def chat_with_bot(user_message):
    
    if "assist" in user_message:
        return "Congrats! No patent filed with this idea\nThat's a great idea to be published.\nYou can start the application process here: https://patentit."
    elif "unlock" in user_message:
        return "Sorry! There's already a patent registered \nbased on this idea\nHere is the ref link: [https://patent/8046721]\nApple’s Slide-to-Unlock (US Patent No. 8,046,721)\nA user interface design for unlocking devices \nby sliding a finger across \nthe screen."
            
    for pattern, responses in patterns.items():
        if pattern in user_message.lower():
            response = '' + random.choice(responses)
            return response
    if user_message in patterns:
        return patterns[user_message]
        
    if "hi" in user_message.lower() or 'hey' in user_message.lower():
        return "Hello! How can I assist you today? \nPlease choose from the following options: \n1. Track patent \n2. Apply for new patent \n3. Get advice on idea \n4. Funding opportunities"
    if "track patent" in user_message.lower():
        return track_patent(user_message)
    elif "apply for patent" in user_message or "new patent" in user_message:
        return apply_for_patent()
    elif "advice" in user_message or "idea" in user_message:
        return get_advice_on_idea()
    elif "funding" in user_message:
        return get_funding_opportunities()
    else:
        return "Hello! How can I assist you today? \nPlease choose from the following options: \n1. Track patent \n2. Apply for new patent \n3. Get advice on idea \n4. Funding opportunities"


def track_patent(user_message):
    
    words = user_message.split()
    patent_number = words[-1]
    if patent_number in patent_database:
        status = patent_database[patent_number]
        return f"Your patent with application number {patent_number} \nis currently '{status}'."
    else:
        return f"Patent {patent_number} not found. \nWould you like assistance in applying for a new patent?"

def apply_for_patent():
    response_text = "To apply for a new patent, please describe your invention briefly. "
    flag = True
    return response_text

def get_advice_on_idea():
    response_text = f"Firstly, check the patent availability for your idea.\nIf you need more assistance from a mentor,\nHere are the available mentors:\n{', '.join(mentors)}.\nFor more details visit https://mint/mentors"
    return response_text

def get_funding_opportunities():
    funding_list = "\n".join(funding_opportunities)
    response_text = f"Here are the available funding opportunities:\n{funding_list}. \nYou can connect with investors through our platform here: \nhttps://mint/investors."
    return response_text