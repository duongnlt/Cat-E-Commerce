from models.common import CommonModel
from typing import Optional


class Product(CommonModel):
    name: str
    type: str
    description: str
    price: Optional[float] = 0.0

class UpdateProduct(CommonModel):
    name: Optional[str]
    type: Optional[str]
    description: Optional[str]
    price: Optional[float] = 0.00
