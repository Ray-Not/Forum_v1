from django.urls import path

from . import views

app_name = 'server'

urlpatterns = [
    path('topers/', views.get_topers_view, name='topers'),
    path('info/', views.get_server_view, name='info'),
    path('privilegue/<str:ip>/<int:port>/', views.get_server_privelegue, name='price'),
    path('data/', views.receive_data, name='receive_data'),
]