from pathlib import Path
from .models import User
import a2s
import os
from django.conf import settings

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

def get_map_dir(server):
    if not server:
        return None
    images_dir = os.path.join(settings.STATIC_ROOT, 'images/maps/')
    image_path = os.path.join(images_dir, server.map_name + '.jpg')
    BASE_DIR = Path(__file__).resolve().parent.parent
    if os.path.exists(os.path.join(BASE_DIR, image_path)):
        return image_path
    else:
        return os.path.join(settings.STATIC_URL, 'images/maps/default.jpg')