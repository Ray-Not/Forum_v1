from django.urls import path
from . import views

app_name = 'posts'
urlpatterns = [
    path('news/', views.news_html, name='news'),
    path('', views.base_html, name='base')
]
