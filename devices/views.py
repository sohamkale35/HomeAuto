from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse

import random

def get_temperature(request):
    # Specify the range for the random temperature readings
    min_temp = 15  # Minimum temperature in °C
    max_temp = 30  # Maximum temperature in °C
    temperature = random.uniform(min_temp, max_temp)  # Generate a random float
    data = {'temperature': round(temperature, 2)}  # Round to 2 decimal places
    return JsonResponse(data)





def get_temperature_real(request):
    # Return a simple text response
    temperature = "Feature coming soon"
    data = temperature
    return HttpResponse(data)
