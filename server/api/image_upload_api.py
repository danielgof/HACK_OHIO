import room_image_search
import upload_to_imgur
from flask import Blueprint
from create import *
from models.building import *
from flask import request
from flask import jsonify
import os

images = Blueprint("images", __name__, url_prefix="/api/v1/images")

@images.route("/upload", methods=["POST"])
def upload():
    if request.method == "POST":
        # Check if the 'file' field is present in the request
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'})

        uploaded_file = request.files['file']

        # Check if a file was selected
        if uploaded_file.filename == '':
            return jsonify({'error': 'No selected file'})

        # Create a temporary file path
        temp_file_path = os.path.join('temp', uploaded_file.filename)
        
        print(room_image_search(upload_to_imgur(temp_file_path), "'Ohio Union' AND ('room' OR 'hall')"))

    # Process the uploaded image
    # You can add your image processing logic here

    return jsonify({"message": "Image uploaded and processed"})