from flask import Flask, render_template


def create_app(config_object="config.Config"):
    app = Flask(__name__)
    app.config.from_object(config_object)

    from app.routes import main

    app.register_blueprint(main)

    @app.errorhandler(404)
    def not_found(_error):
        return render_template("404.html"), 404

    @app.errorhandler(500)
    def internal_error(_error):
        app.logger.exception("Internal server error")
        return render_template("500.html"), 500

    return app
