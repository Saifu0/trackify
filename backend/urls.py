from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
# from .views import FrontendAppView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
    # re_path(r'^', FrontendAppView.as_view()),
]
