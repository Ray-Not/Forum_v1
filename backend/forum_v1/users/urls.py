from django.urls import path, include
from djoser.views import UserViewSet

app_name = 'users'
urlpatterns = [
    path('user/create/', UserViewSet.as_view({'post': 'create'})),
    path('', include('djoser.urls.jwt')),
]
 