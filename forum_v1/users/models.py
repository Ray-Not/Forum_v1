from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    priv_status = models.CharField(max_length=255, blank=True)
    email = models.EmailField(null=False)
    image = models.ImageField(upload_to='users_ava')

    def __str__(self):
        return self.username
    
    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
