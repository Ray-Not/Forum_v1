from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import News
from django.core.paginator import Paginator

@require_http_methods(['GET'])
def news_html(request):
    news_posts = News.objects.all().order_by('-date')
    paginator = Paginator(news_posts, 3) 
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    context = {
        'news': page_obj,
        'request': request
    }
    return render(request, 'news.html', context=context)

@require_http_methods(['GET'])
def base_html(request):
    return render(request, 'base.html')