from .models import User

def get_top_players():
    top_donater = User.objects.order_by('-donation').first()
    top_gamer = User.objects.order_by('-time_played').first()
    top_liker = User.objects.order_by('-liked').first()
    return [top_donater, top_gamer, top_liker]