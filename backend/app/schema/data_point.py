from pydantic import BaseModel


class DataPointResponseSchema(BaseModel):
    id: int
    article_id: int
    heading: str
    summary: str
    most_relevant_keyword: str
    relevance_score: int
    sentiment_score: float

    class Config:
        orm_mode = True
