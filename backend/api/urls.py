from django.urls import path
from . import views

urlpatterns = [
    path('predict_house_price/', views.predict_house_price, name='predict_house_price'),
]
