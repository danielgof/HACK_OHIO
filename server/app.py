from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
import os
from datetime import date
# from api.building_api import building
# from api.room_api import room
import room_image_search
import upload_to_imgur


app = Flask(__name__)
#app.register_blueprint(building)
#app.register_blueprint(room)
CORS(app)

@app.route("/upload", methods=["POST"])
def upload():
    if uploaded_file.filename == "":
        return jsonify({"error": "No selected file"})

    # Ensure the "uploads" directory exists
    if not os.path.exists("uploads"):
        os.makedirs("uploads")

    # Save the uploaded file to the "uploads" directory
    temp_file_path = os.path.join("uploads", uploaded_file.filename)
    uploaded_file.save(temp_file_path)

    # Process the uploaded image
    # You can add your image processing logic here

    return jsonify({"message": "Image uploaded and processed"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

if not os.path.isdir("./log"):
    os.mkdir("./log")
logging.basicConfig(filename=f'./log/{date.today()}.log', level=logging.DEBUG)

if __name__ == "__main__":
    app.run(port = 5000, debug = True)