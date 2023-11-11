from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from app.db.session import get_db
from app.schema.data_point import DataPointResponseSchema
from app.services.core.data_point import DataPointService
from app.models.data_point import DataPoint

router = APIRouter()


@router.get("/data-points/", response_model=List[DataPointResponseSchema])
async def list_data_points(db: Session = Depends(get_db)):
    """
    List all data points.

    Returns:
        List[DataPointResponseSchema]: A list of data points.
    """
    data_point_service = DataPointService(db)
    data_points = data_point_service.list_data_points()
    return data_points
