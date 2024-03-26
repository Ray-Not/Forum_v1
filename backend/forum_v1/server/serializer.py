from rest_framework import serializers
from users.models import User

from .models import Privilege


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'donation', 'time_played', 'liked', 'image']

class PrivilegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Privilege
        fields = ['privilege', 'price', 'privilege_translit']

class PlayerSerializer(serializers.Serializer):
    index = serializers.IntegerField()
    name = serializers.CharField()
    score = serializers.IntegerField()

class ServerInfoSerializer(serializers.Serializer):
    server_name = serializers.CharField()
    map_name = serializers.CharField()
    address = serializers.CharField()
    player_count = serializers.IntegerField()
    max_players = serializers.IntegerField()