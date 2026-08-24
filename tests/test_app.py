from app import create_app


def test_create_app():
    assert create_app() is not None


def test_404_uses_custom_page(client):
    response = client.get("/rota-inexistente")
    assert response.status_code == 404
    assert "Página não encontrada" in response.text
