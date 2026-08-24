import os


class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "dev-only-change-me")
