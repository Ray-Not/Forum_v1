from django.core.paginator import Paginator
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.views.decorators.cache import never_cache

from .models import News
from users.utils import get_top_players


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

@never_cache
@require_http_methods(['GET'])
def base_html(request):
    top_donater, top_gamer, top_liker = get_top_players()
    context = {
        'top_donater': top_donater,
        'top_gamer': top_gamer,
        'top_liker': top_liker,
    }
    return render(request, 'base.html', context)
    # user_agent = parse(request.META.get('HTTP_USER_AGENT', ''))
    # if user_agent.is_mobile:
    #     return render(request, 'm_base.html')
    # else:
    #     return render(request, 'base.html')