from django.db import models
from users.models import User
from datetime import datetime

class News(models.Model):
    type = models.CharField(max_length=64)
    title = models.CharField(max_length=256)
    content = models.TextField()
    date = models.DateField(default=datetime.today)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'[{self.type}] ' + self.title + ' by ' + self.author.username

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
