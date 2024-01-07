from flask import Flask
from flask_restful import Api
from core.routes import initialize_routes
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

# Call the initialize_routes function to add routes to the API
initialize_routes(api)

if __name__ == '__main__':
    app.run(debug=True)

