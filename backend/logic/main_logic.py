from backend.models.models import Order, Round


def apply_discounts(order: Order) -> Order:
    # execute your discounts logic here
    return order


def apply_taxes(order: Order) -> Order:
    # apply taxes here
    return order


def add_round(order: Order, round_: Round) -> Order:
    clone = order.model_copy(deep=True)
    clone.items.extend(round_.items)
    clone.rounds.append(round_)
    new_subtotal = sum(i.total for i in round_.items)
    clone.subtotal += new_subtotal
    discounted = apply_discounts(clone)
    taxed = apply_taxes(discounted)
    return taxed
