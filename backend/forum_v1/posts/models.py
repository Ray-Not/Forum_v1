from django.db import models
from django.utils import timezone
from users.models import User


class News(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField(max_length=1024)
    date = models.DateTimeField(default=timezone.now)
    image = models.ImageField(upload_to='news_images')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
