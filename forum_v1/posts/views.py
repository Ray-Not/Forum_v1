from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import News
from users.models import User

@require_http_methods(['GET'])
def news_html(request):
    # data = ['TYPE', 'TITLE', 'CONTENT', User.objects.get(id=1)]
    # news_type, news_title, news_content, user_instance = data
    # News.objects.create(type=news_type, title=news_title, content=news_content, author=user_instance)
    news_posts = News.objects.all().order_by('-date')
    context = {
        'news': news_posts,
        'request': request
    }
    return render(request, 'news.html', context=context)

@require_http_methods(['GET'])
def base_html(request):
    return render(request, 'base.html')