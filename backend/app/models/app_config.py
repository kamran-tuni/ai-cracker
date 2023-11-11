from sqlalchemy import Column, Integer, String
from app.models.base import Base
from sqlalchemy.ext.mutable import MutableDict
from sqlalchemy.types import JSON


class AppConfig(Base):
    """
    AppConfig model represents application configuration settings in the database for SQLite.

    Attributes:
        id (Integer): The unique identifier for the application configuration.
        news_sources (JSON): A JSON serialized list of strings representing the news sources.
        keywords (JSON): A JSON serialized list of strings representing the keywords for filtering or searching.
        industries (JSON): A JSON serialized list of strings representing the industries of interest.
        ai_model_endpoint (String): The endpoint URL for the AI model.
        ai_model_version (String): The version of the AI model being used.
        ai_model_api_key (String): The API key for accessing the AI model.
    """

    __tablename__ = "app_config"

    id = Column(Integer, primary_key=True, index=True)
    news_sources = Column(String)
    keywords = Column(String)
    industries = Column(String)
    ai_model_endpoint = Column(String)
    ai_model_version = Column(String)
    ai_model_api_key = Column(String)
