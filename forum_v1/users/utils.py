from .models import User
import a2s

def get_top_players():
    top_donater = User.objects.order_by('-donation').first()
    top_gamer = User.objects.order_by('-time_played').first()
    top_liker = User.objects.order_by('-liked').first()
    return [top_donater, top_gamer, top_liker]

def get_server_data():
    try:
        address = ('46.174.50.10', 27237)
        return a2s.info(address), a2s.players(address), None
    except Exception as e:
        print(e)
        return None, None, e