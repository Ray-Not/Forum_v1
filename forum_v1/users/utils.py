from .models import User
from valve.source import a2s

def get_top_players():
    top_donater = User.objects.order_by('-donation').first()
    top_gamer = User.objects.order_by('-time_played').first()
    top_liker = User.objects.order_by('-liked').first()
    print([top_donater, top_gamer, top_liker])
    return [top_donater, top_gamer, top_liker]

def get_server_data():
    try:
        server_address = ('46.174.50.10', '27237')
        with a2s.ServerQuerier(server_address) as server:
            info = server.info()
            return info
    except Exception as e:
        print("Error:", e)
        return None