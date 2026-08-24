import pytest


@pytest.mark.parametrize("path", ["/", "/PedroZulim", "/AnaJulia", "/health"])
def test_routes_return_success(client, path):
    assert client.get(path).status_code == 200


def test_health_payload(client):
    assert client.get("/health").get_json() == {"status": "ok"}
