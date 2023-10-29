import cv2
import os,argparse
import pytesseract
import subprocess
from PIL import Image

def visual_location(room_name, image_maps):
    for map in image_maps:
        image = cv2.imread(map)

        pytesseract.pytesseract.tesseract_cmd = r'server\Tesseract-OCR\tesseract.exe'
            
        filename = "{}.png".format(os.getpid())
        cv2.imwrite(filename, image)
        text = pytesseract.image_to_string(Image.open(filename))
        os.remove(filename)

        if room_name in text:
            cv2.imwrite("server/marked_image.png", image)
            break
        