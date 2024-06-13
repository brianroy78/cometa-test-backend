from datetime import datetime

from backend.endpoints.endpoints import CACHED_DATA
from backend.logic.factories import create_item
from backend.logic.main_logic import add_round
from backend.models.models import Beer, Stock, Order, Round


def initialize_data():
    stock: Stock = Stock(
        last_updated=datetime.now(),
        beers=[
            Beer(name="Corona", price=117., quantity=100, ),
            Beer(name="Quilmes", price=120., quantity=90, ),
            Beer(name="Club Colombia", price=110., quantity=110, ),
        ]
    )
    total_items = [
        create_item(beer=stock.beers[0], quantity=2),
        create_item(beer=stock.beers[2], quantity=1),
        create_item(beer=stock.beers[2], quantity=1),
        create_item(beer=stock.beers[1], quantity=2),
        create_item(beer=stock.beers[1], quantity=3),
    ]
    order: Order = Order(
        created=datetime.now(),
        paid=False,
        subtotal=.0,
        taxes=.0,
        discounts=.0,
        items=[],
        rounds=[],
    )

    order = add_round(order=order, round_=Round(created=datetime(2024, 9, 10, 12, 0, 30), items=total_items[:2]))
    order = add_round(order=order, round_=Round(created=datetime(2024, 9, 10, 12, 20, 31), items=total_items[2:3]))
    order = add_round(order=order, round_=Round(created=datetime(2024, 9, 10, 12, 43, 21), items=total_items[3:]))

    CACHED_DATA["stock"] = stock
    CACHED_DATA["orders"] = [order]
