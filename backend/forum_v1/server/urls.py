from django.urls import path

from . import views

app_name = 'server'
urlpatterns = [
    path('topers/', views.get_topers_view, name='topers'),
    path('info/', views.get_server_view, name='info'),
]