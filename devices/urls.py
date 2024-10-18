from django.urls import path
from .views import get_temperature  # Only import the function you need

urlpatterns = [
    path('get_temperature/', get_temperature, name='get_temperature'),  # Ensure this path is correct
]
