from flask import Blueprint, render_template

from app.data.ana import ANA
from app.data.pedro import PEDRO

main = Blueprint("main", __name__)


@main.get("/")
def home():
    return render_template("home.html", perfis=(PEDRO, ANA))


@main.get("/PedroZulim")
def pedro():
    return render_template("curriculo.html", perfil=PEDRO)


@main.get("/AnaJulia")
def ana():
    return render_template("curriculo.html", perfil=ANA)


@main.get("/health")
def health():
    return {"status": "ok"}, 200
