import openai
from openai import OpenAI
from app.config import Config

openai.api_key = Config.OPENAI_API_KEY


class ChatService:
    def get_response(self, user_message: str) -> str:
        client = OpenAI()

        with open('app/services/ai/concat_summarised.txt', 'r') as file:
            data = file.read()

        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are Market Intelligence Researcher, skilled in \
                analyse a large amount of text to extract insight. Answer as concisely as possible"},
                {"role": "user", "content": "Use the information specified in the 'summarised news' \
                to answer the question specified in the 'question\
                '. - 'question': %s - 'summarised news': %s"%(user_message,data)}
            ] 
        )
        response_message = response.choices[0].message.content
        return response_message
