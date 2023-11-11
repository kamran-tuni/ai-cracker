from fastapi import FastAPI
from app.config import Config
from app.adapters.v1 import router as api_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="ChatOTK Documentation", version="0.0.1")
app.include_router(api_router, prefix="/api/v1")
app.include_router(api_router, prefix="/api/v1")

origins = [
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
