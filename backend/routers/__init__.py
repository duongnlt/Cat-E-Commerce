from fastapi import APIRouter
from routers.product import router as product_router

api_router = APIRouter(prefix="/api/v1")
api_router.include_router(product_router)
# api_router.include_router(user_router)