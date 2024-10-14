from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add_devices/', views.add_devices, name='add_devices'),
    path('energy_consumption/', views.energy_consumption, name='energy_consumption'),
]
