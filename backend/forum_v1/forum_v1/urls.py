from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from posts import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.base_html, name='base'),
    path('', include('posts.urls')),
    path('', include('users.urls')),
    path('api/server/', include('server.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)