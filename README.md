# Currículo Portfolio

Aplicação web de portfólio desenvolvida em Python e Flask, com renderização server-side por Jinja2, arquitetura modular, testes automatizados e deploy preparado para o Render.

## Rotas

- `/` — página inicial
- `/PedroZulim` — currículo de Pedro
- `/AnaJulia` — currículo de Ana
- `/health` — verificação de saúde em JSON

## Desenvolvimento local

Requer Python 3.12.

```bash
python -m venv .venv
pip install -r requirements-dev.txt
flask --app app run --debug
```

Antes de enviar alterações:

```bash
ruff check .
pytest
```

## Arquitetura

O padrão Application Factory fica em `app/__init__.py`, as rotas em `app/routes.py`, os dados dos currículos em `app/data`, os templates Jinja2 em `app/templates` e os arquivos visuais em `app/static`.

## CI/CD

Pull Requests e atualizações da `main` executam o job obrigatório `quality` no GitHub Actions. Ele valida Ruff, pytest e a inicialização da aplicação. A `main` representa produção.

```text
Pull Request → GitHub Actions → Ruff + pytest + startup check → main → Render
```

## Deploy

O Blueprint `render.yaml` configura o serviço no Render com:

- build: `pip install -r requirements.txt`;
- start: `gunicorn app:app`;
- health check: `/health`;
- auto deploy somente depois que os checks passam.

Os segredos de produção devem ser configurados no ambiente do Render e nunca versionados.
