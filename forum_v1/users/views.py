from typing import Any
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.contrib.auth import authenticate, login

from .forms import CreationForm


class signup(CreateView):
    form_class = CreationForm
    success_url = reverse_lazy('posts:news')
    template_name = 'signup.html'
    print(CreationForm)

    def form_valid(self, form):
        response = super().form_valid(form)
        user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password1'])
        if user is not None:
            login(self.request, user)
        return response

class signin(LoginView):
    print(LoginView)
    template_name = 'signin.html'
    def get_success_url(self):
        return reverse_lazy('posts:news')