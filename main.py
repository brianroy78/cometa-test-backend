from datetime import datetime

from fastapi import FastAPI

from endpoints import endpoints
from endpoints.endpoints import CACHED_DATA
from models.models import Stock, Beer, Order, Item

app = FastAPI()
app.include_router(endpoints.router)


def create_item(beer: Beer, quantity: int, profit_margin: float) -> Item:
    final_price = beer.price + beer.price * profit_margin
    return Item(name=beer.name, quantity=quantity, price_per_unit=final_price, total=final_price * quantity, )


def initialize_data():
    profit_margin = 0.1
    stock: Stock = Stock(
        last_updated=datetime.now(),
        beers=[
            Beer(name="Corona", price=117., quantity=100, ),
            Beer(name="Quilmes", price=120., quantity=90, ),
            Beer(name="Club Colombia", price=110., quantity=110, ),
        ]
    )

    orders: list[Order] = [Order(
        created=datetime.now(),
        paid=False,
        subtotal=.0,
        taxes=.0,
        discounts=.0,
        items=[
            create_item(beer=stock.beers[0], quantity=2, profit_margin=profit_margin),
            create_item(beer=stock.beers[2], quantity=3, profit_margin=profit_margin),
            create_item(beer=stock.beers[1], quantity=1, profit_margin=profit_margin),
        ],
    )]

    CACHED_DATA["stock"] = stock
    CACHED_DATA["orders"] = orders


initialize_data()
