from pydantic import BaseModel


class ChatMessageRequestSchema(BaseModel):
    message: str


class ChatMessageResponseSchema(BaseModel):
    response: str
