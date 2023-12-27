from django.contrib.auth.views import LoginView, LogoutView
from django.urls import path

from . import views

app_name = 'users'
urlpatterns = [
    path('signup/', views.signup.as_view(), name='signup'),
    path('signin/', views.signin.as_view(), name='signin'),
    path('logout/', LogoutView.as_view(next_page='posts:news'), name='logout'),
]
