from serpapi import GoogleSearch

def google_room_search(image_url, location):
    search = GoogleSearch({
        "q": location,
        "engine": "google_reverse_image",
        "image_url": image_url,
        "google_domain": "google.com",
        "api_key": "c86f0952bdcd62412488056657dee51dc03cd04b4f983c1cfec410ac2d8df889"
    })
    return search.get_dict()["inline_images"][0]["title"]