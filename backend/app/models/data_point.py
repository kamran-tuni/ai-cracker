from sqlalchemy import Column, Integer, String, Float
from app.models.base import Base


class DataPoint(Base):
    """
    DataPoint model represents individual data points extracted from articles.

    Attributes:
        id (Integer): The unique identifier for the data point.
        article_id (Integer): The identifier of the article from which this data point is extracted.
        heading (String): The heading or title of the article.
        most_relevant_keyword (String): The most relevant keyword identified in the article.
        score (Float): A numerical score representing some metric or evaluation related to the article.
    """

    __tablename__ = "data_points"

    id = Column(Integer, primary_key=True, index=True)
    article_id = Column(Integer, index=True)
    heading = Column(String)
    summary = Column(String)
    most_relevant_keyword = Column(String)
    relevance_score = Column(Integer)
    sentiment_score = Column(Float)
