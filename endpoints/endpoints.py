from fastapi import APIRouter
router = APIRouter()
CACHED_DATA = {}


@router.get("/order/", tags=["order"])
def get_orders():
    return [order.model_dump() for order in CACHED_DATA["orders"]]


@router.get("/stock/", tags=["stock"])
def get_orders():
    return CACHED_DATA["stock"].model_dump()

# We could add updated POST, DELETE, CREATE Put later on
# in order to follow RESTFUL convention




