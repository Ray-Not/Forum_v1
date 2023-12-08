from django.db import models
from users.models import User
from django.utils import timezone

class News(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField(max_length=530)
    date = models.DateField(default=timezone.now)
    image = models.ImageField(upload_to='news_images')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
