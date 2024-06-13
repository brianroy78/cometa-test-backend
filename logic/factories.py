from datetime import datetime

from models.models import Beer, Item, Round

# you might get this from database
profit_margin = 0.1


def create_item(beer: Beer, quantity: int) -> Item:
    final_price = beer.price + beer.price * profit_margin
    return Item(name=beer.name, quantity=quantity, price_per_unit=final_price, total=final_price * quantity, )
