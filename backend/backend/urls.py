from django.contrib import admin
from django.urls import path, include
from api import views  # Update this line to import views from the 'api' app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),
]
