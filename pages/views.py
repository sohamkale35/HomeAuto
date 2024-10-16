from django.shortcuts import render

# Homepage view
def products(request):
    context = {
        'user': request.user,
    }
    return render(request, 'pages/products.html', context)



def add_devices(request):
    return render(request, 'pages/add_devices.html')

def energy_consumption(request):
    return render(request, 'pages/energy_consumption.html')
from django.shortcuts import render


def homepage(request):
    return render(request, 'pages/homepage.html')
