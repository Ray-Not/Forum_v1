from django.http import JsonResponse

from .serializer import PlayerSerializer, ServerInfoSerializer, UserSerializer
from .utils import get_map_dir, get_server_data, get_top_players


def get_topers_view(request):
    top_donater, top_gamer, top_liker = get_top_players()
    donater_serializer = UserSerializer(top_donater)
    gamer_serializer = UserSerializer(top_gamer)
    liker_serializer = UserSerializer(top_liker)
    
    data = {
        'top_donater': donater_serializer.data if donater_serializer else None,
        'top_gamer': gamer_serializer.data if gamer_serializer else None,
        'top_liker': liker_serializer.data if liker_serializer else None,
    }
    
    return JsonResponse(data)

def get_server_view(request):
    server_info, players_info, traceback = get_server_data('46.174.50.10', 27237)
    serialized_players_info = PlayerSerializer(players_info, many=True).data
    serialized_server_info = ServerInfoSerializer(server_info).data
    print(server_info)
    map_dir = get_map_dir(server_info)
    data = {
        'players_info': serialized_players_info,
        'server_info': serialized_server_info,
        'map_dir': str(map_dir),
        'error': str(traceback),
    }
    return JsonResponse(data)