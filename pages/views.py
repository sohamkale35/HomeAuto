from django.shortcuts import render

# Homepage view
def index(request):
    context = {
        'user': request.user,
    }
    return render(request, 'pages/index.html', context)



def add_devices(request):
    return render(request, 'pages/add_devices.html')

def energy_consumption(request):
    return render(request, 'pages/energy_consumption.html')
from django.shortcuts import render


