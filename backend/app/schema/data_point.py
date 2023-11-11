from pydantic import BaseModel


class DataPointResponseSchema(BaseModel):
    id: int
    article_id: int
    heading: str
    most_relevant_keyword: str
    score: float

    class Config:
        orm_mode = True
