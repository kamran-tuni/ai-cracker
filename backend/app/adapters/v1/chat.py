from fastapi import APIRouter, Depends

from app.schema.chat import ChatMessageRequestSchema, ChatMessageResponseSchema
from app.services.core.chat import ChatService


router = APIRouter()

@router.post("/chat/", response_model=ChatMessageResponseSchema)
async def chat_with_system(request: ChatMessageRequestSchema):
    """
    Chat with the system.

    Args:
        request: the user's chat message.

    Returns:
        ChatMessageResponseSchema: The system's response.
    """
    chat_service = ChatService()
    response = chat_service.get_response(request.message)
    return ChatMessageResponseSchema(response=response)
