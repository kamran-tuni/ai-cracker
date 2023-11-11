from fastapi import APIRouter

from app.adapters.v1.app_config import router as app_config_router
from app.adapters.v1.data_point import router as data_point_router
from app.adapters.v1.chat import router as chat_endpoint_router

router = APIRouter()

router.include_router(app_config_router)
router.include_router(data_point_router)
router.include_router(chat_endpoint_router)
