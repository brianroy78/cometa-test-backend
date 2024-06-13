from unittest import TestCase

from starlette.testclient import TestClient

from main import app

client = TestClient(app)


class TestEndpoints(TestCase):

    def test_order_endpoint(self):
        response = client.get("/order/")
        assert response.status_code == 200
        result = response.json()
        assert isinstance(result, list)
        assert len(result) > 0
        assert isinstance(result[0], dict)
        expected = {
            "created",
            "paid",
            "subtotal",
            "taxes",
            "discounts",
            "items",
            "rounds",
        }
        assert expected == set(result[0].keys())

    def test_stock_endpoint(self):
        response = client.get("/stock/")
        assert response.status_code == 200
        result = response.json()
        assert isinstance(result, dict)

        assert len(result) > 0
        assert {"last_updated", "beers", } == set(result.keys())
        assert len(result["beers"]) > 0
