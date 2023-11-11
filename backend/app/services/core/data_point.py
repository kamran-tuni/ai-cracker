from typing import Dict
from sqlalchemy.orm import Session
from app.models.data_point import DataPoint

import json


class DataPointService:
    def __init__(self, db_session: Session):
        """
        Initialize the AppConfigService with a database session.

        Args:
            db_session (Session): The database session instance.
        """
        self.db_session = db_session

    def list_data_points(self):
        return self.db_session.query(DataPoint).all()
