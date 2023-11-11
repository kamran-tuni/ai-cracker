from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from app.db.session import get_db
from app.schema.data_point import DataPointResponseSchema
from app.services.core.data_point import DataPointService
from app.models.data_point import DataPoint

router = APIRouter()


@router.get("/data-points/")
async def list_data_points(db: Session = Depends(get_db)):
    """
    List all data points.

    Returns:
        List[DataPointResponseSchema]: A list of data points.
    """
    data_point_service = DataPointService(db)
    data_points = data_point_service.list_data_points()
 
    response_data = {"result": []}

    for data_point in data_points:
        response_data["result"].append({
            "article_id": data_point.article_id,
            "heading": data_point.heading,
            "summary": data_point.summary,
            "most_relevant_keyword": data_point.most_relevant_keyword,
            "relevance_score": data_point.relevance_score,
            "sentiment_score": data_point.sentiment_score,

        })
    return response_data
