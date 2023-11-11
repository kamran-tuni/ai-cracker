from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schema.app_config import AppConfigRequestSchema, AppConfigResponseSchema
from app.services.core.app_config import AppConfigService

import json


router = APIRouter()


@router.post("/config/")
async def create_config(request: AppConfigRequestSchema, db: Session = Depends(get_db)):
    """
    Create app configuration.

    Args:
        request: the configuration details.

    Returns:
        AppConfigResponseSchema: The created configuration.
    """
    create_config = AppConfigService(db)

    app_config = create_config.add_or_update_config(config_data=request.dict())

    app_config_resp = {
        "id": app_config.id,
        "news_sources": json.loads(app_config.news_sources),
        "keywords": json.loads(app_config.keywords),
        "industries": json.loads(app_config.industries),
        "ai_model_endpoint": app_config.ai_model_endpoint,
        "ai_model_version": app_config.ai_model_version,
        "ai_model_api_key": app_config.ai_model_api_key,
    }
    return AppConfigResponseSchema(**app_config_resp)
