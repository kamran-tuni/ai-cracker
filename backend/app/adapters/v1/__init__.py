from fastapi import APIRouter

from app.adapters.v1.app_config import router as app_config_router

router = APIRouter()

router.include_router(app_config_router)
