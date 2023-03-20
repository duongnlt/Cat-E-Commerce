from models.product import Product, UpdateProduct
from bson import ObjectId
from fastapi import APIRouter, HTTPException
from typing import List
from database import db


router = APIRouter(
    prefix='/product',
    tags=['Product']
)

@router.get('/', response_model=List[Product])
async def get_products():
    products = await db['products'].find().to_list(100)
    return products

@router.get('/{id}', response_model=Product)
async def get_product(id: str):
    try:
        product = await db["products"].find_one({"_id": ObjectId(id)})
        return product
    except:
        raise HTTPException(status_code=404, detail=f"Product {id} not found")
    