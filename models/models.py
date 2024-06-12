from datetime import datetime
from typing import List

from pydantic import BaseModel


class Beer(BaseModel):
    name: str
    price: float
    quantity: int


class Stock(BaseModel):
    last_updated: datetime
    beers: List[Beer]


class Item(BaseModel):
    name: str
    quantity: int
    price_per_unit: float
    total: float


class Order(BaseModel):
    created: datetime
    paid: bool
    subtotal: float
    taxes: float
    discounts: float
    items: List[Item]
