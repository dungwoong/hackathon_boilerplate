from flask import Flask, jsonify, request
import os
from dotenv import load_dotenv

app = Flask(__name__)
load_dotenv()

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    return jsonify({"method": request.method})


if __name__ == '__main__':
    ip = os.getenv('IP_ADDRESS', None)

    app.run(host=ip, port=5000)