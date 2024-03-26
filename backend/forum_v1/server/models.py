from django.db import models

class Privilege(models.Model):
    privilege = models.CharField(max_length=32)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    privilege_translit = models.CharField(max_length=32)
    def __str__(self):
        return f'{self.privilege_translit} за {self.price} рублей'
    class Meta:
        verbose_name = 'Привилегия'
        verbose_name_plural = 'Привилегии'

class Server(models.Model):
    ip = models.CharField(max_length=32)
    name = models.CharField(max_length=32)
    port = models.IntegerField()
    def __str__(self):
        return f'Сервер {self.name} [{self.ip}:{self.port}]'
    class Meta:
        verbose_name = 'Сервер'
        verbose_name_plural = 'Сервера'

class ServerPrivilege(models.Model):
    server = models.ForeignKey(Server, on_delete=models.CASCADE)
    privilege = models.ForeignKey(Privilege, on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.server} с {self.privilege}'
    class Meta:
        verbose_name = 'Сервер->Привилегия'
        verbose_name_plural = 'Сервера->Привилегии'