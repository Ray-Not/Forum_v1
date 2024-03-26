import os

import a2s
from django.conf import settings
from users.models import User


def get_top_players():
    top_donater = User.objects.order_by('-donation').first()
    top_gamer = User.objects.order_by('-time_played').first()
    top_liker = User.objects.order_by('-liked').first()
    return [top_donater, top_gamer, top_liker]

def get_server_data(ip, port):
    try:
        address = (ip, port)
        return a2s.info(address), a2s.players(address), None
    except Exception as e:
        return None, None, e

def get_map_dir(server_name):
    if not server_name:
        return 'path/not_found'
    image_path = ''.join(['.', settings.STATIC_URL, 'images/', 'maps/', server_name.map_name, '.jpg'])
    if os.path.exists(image_path):
        return image_path
    else:
        return ''.join(['.', settings.STATIC_URL, 'images/', 'maps/', 'default.jpg'])
