#basic networking imports
from serpapi import GoogleSearch
from pprint import pprint
import requests
import json

#image handling imports
import base64

def upload_to_imgur(path):
    api_key = '34f39e80f604b3b'
    url = r'https://api.imgur.com/3/upload.json'
    headers = {'Authorization': f'Client-ID {api_key}'}

    with open(path, 'rb') as image_file:
        files = {'image': (image_file.name, image_file)}
        response = requests.post(url, headers=headers, files=files)
        data = response.json()
        # pprint(data)
    
    return data['link']


def google_room_search(image_url, location):
    search = GoogleSearch({
        "q": location,
        "engine": "google_reverse_image",
        "image_url": image_url,
        "google_domain": "google.com",
        "api_key": "c86f0952bdcd62412488056657dee51dc03cd04b4f983c1cfec410ac2d8df889"
    })
    return search.get_dict()["inline_images"][0]["title"]

# key: 34f39e80f604b3b
# secret: b55abe2a8e9ac107f54da1894a8bc922c131e642

# upload_to_imgur("/Users/alexzhang/Documents/Screenshots/Screenshot 2023-10-28 at 4.25.15 PM.png")