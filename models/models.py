from datetime import datetime

from pydantic import BaseModel


class Beer(BaseModel):
    name: str
    price: float
    quantity: int


class Stock(BaseModel):
    last_updated: datetime
    beers: list[Beer]


class Item(BaseModel):
    name: str
    quantity: int
    price_per_unit: float
    total: float


class Round(BaseModel):
    created: datetime
    items: list[Item]


class Order(BaseModel):
    created: datetime
    paid: bool
    subtotal: float
    taxes: float
    discounts: float
    items: list[Item]
    rounds: list[Round]
