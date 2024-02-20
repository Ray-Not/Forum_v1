from djoser.serializers import UserCreateSerializer, UserSerializer
from .models import User

class UserSerializer(UserCreateSerializer):
  class Meta(UserCreateSerializer.Meta):
    model = User
    fields = ('username', 'password',)