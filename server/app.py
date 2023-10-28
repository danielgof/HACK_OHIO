from flask import Flask

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index() -> dict:
    return {"status":"good morning"}

if __name__ == "__main__":
    app.run(debug=True, port=5000)