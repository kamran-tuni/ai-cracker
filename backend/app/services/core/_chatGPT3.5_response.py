import openai
from openai import OpenAI
from dotenv.main import load_dotenv
import os
import argparse

load_dotenv()
openai.api_key = os.environ['OPENAI_API_KEY']

client = OpenAI()

parser = argparse.ArgumentParser(description='Input question required')
parser.add_argument('-q','--question',help='Input question required', required=True)
args = parser.parse_args()

print ("Input question: %s" % args.question )

question = args.question

with open('concat_summarised.txt', 'r') as file:
    data = file.read()

response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are Market Intelligence Researcher, skilled in analyse a large amount of text to extract insight. Answer as concisely as possible"},
        {"role": "user", "content": "Use the information specified in the 'summarised news' to answer the question specified in the 'question'. - 'question': %s - 'summarised news': %s"%(question,data)}
    ] 
)
ChatGPT_reply = response.choices[0].message.content
print(ChatGPT_reply)
