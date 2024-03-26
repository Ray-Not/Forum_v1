from django.http import JsonResponse

from django.shortcuts import get_object_or_404
from .serializer import PlayerSerializer, ServerInfoSerializer, UserSerializer, PrivilegeSerializer
from .utils import get_map_dir, get_server_data, get_top_players
from .models import ServerPrivilege, Server

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
    servers = Server.objects.all()
    server_data = []
    for server in servers:
        server_info, players_info, traceback = get_server_data(server.ip, server.port)
        serialized_players_info = PlayerSerializer(players_info, many=True).data
        serialized_server_info = ServerInfoSerializer(server_info).data
        server_data.append({
            'players_info': serialized_players_info,
            'server_info': serialized_server_info,
            'error': str(traceback),
        })
        print(str(traceback))
    return JsonResponse({'servers': server_data})

def get_server_privelegue(request, ip, port):
    server = get_object_or_404(Server, ip=ip, port=port)
    server_privileges = ServerPrivilege.objects.filter(server=server)
    privilege_list = []
    for server_privilege in server_privileges:
        privilege_data = {
            'privilege': server_privilege.privilege.privilege,
            'price': server_privilege.privilege.price,
            'privilegeTranslit': server_privilege.privilege.privilege_translit
        }
        privilege_list.append(privilege_data)
    return JsonResponse(privilege_list, safe=False)

def receive_data(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        selected_server = request.POST.get('selectedServer')
        privilege = request.POST.get('privilege')
        print(request.data)
        return JsonResponse({'success': True})
    return JsonResponse({'error': 'Метод не поддерживается'}, status=405)