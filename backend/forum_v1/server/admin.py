from django.contrib import admin

from .models import Privilege, Server, ServerPrivilege

class ServerPrivilegeAdmin(admin.ModelAdmin):
    list_display = ('server', 'privilege')
    list_filter = ('server',)

admin.site.register(Privilege)
admin.site.register(Server)
admin.site.register(ServerPrivilege, ServerPrivilegeAdmin)