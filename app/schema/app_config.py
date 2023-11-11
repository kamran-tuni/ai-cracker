from pydantic import BaseModel
from typing import List


# Schema for creating or updating application configuration
class AppConfigRequestSchema(BaseModel):
    """
    Pydantic schema to represent the request structure for creating or updating an application configuration.

    Attributes:
        news_sources (List[str]): A list of news sources.
        keywords (List[str]): A list of keywords for filtering or searching.
        industries (List[str]): A list of industries of interest.
        ai_model_endpoint (str): The endpoint URL for the AI model.
        ai_model_version (str): The version of the AI model being used.
        ai_model_api_key (str): The API key for accessing the AI model.
    """

    news_sources: List[str]
    keywords: List[str]
    industries: List[str]
    ai_model_endpoint: str
    ai_model_version: str
    ai_model_api_key: str


# Schema for the application configuration response
class AppConfigResponseSchema(AppConfigRequestSchema):
    """
    Pydantic schema to represent the response structure for an application configuration.

    Inherits all attributes from AppConfigRequestSchema and adds:
        id (int): The unique identifier for the application configuration.
    """

    id: int

    class Config:
        orm_mode = True  # Enable ORM mode for compatibility with SQLAlchemy
