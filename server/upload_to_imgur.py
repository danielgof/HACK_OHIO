#basic networking imports
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

# key: 34f39e80f604b3b
# secret: b55abe2a8e9ac107f54da1894a8bc922c131e642

# upload_to_imgur("/Users/alexzhang/Documents/Screenshots/Screenshot 2023-10-28 at 4.25.15 PM.png")