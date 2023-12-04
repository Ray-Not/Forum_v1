from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """Модель с дополнительным полем для подписок"""
    priv_status = models.CharField(max_length=255)
