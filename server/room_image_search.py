from serpapi import GoogleSearch

def google_room_search(image_url, location):
    search = GoogleSearch({
        "q": location,
        "engine": "google_reverse_image",
        "image_url": image_url,
        "google_domain": "google.com",
        "api_key": "4040bd61458a0da5a25b54f932e2ac42134a55ff402bb55f0856404fd8d28a3a"
    })
    return search.get_dict()["inline_images"][0]["title"]