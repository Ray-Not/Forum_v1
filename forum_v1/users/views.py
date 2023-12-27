from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
from django.views.generic import CreateView

from .forms import CreationForm


class signup(CreateView):
    form_class = CreationForm
    success_url = reverse_lazy('posts:news')
    template_name = 'signup.html'

class signin(LoginView):
    template_name = 'signin.html'
    def get_success_url(self):
        return reverse_lazy('posts:news')