from django.shortcuts import render

# Homepage view
def homepage(request):
    return render(request, 'pages/homepage.html')


def add_devices(request):
    return render(request, 'pages/add_devices.html')

def energy_consumption(request):
    return render(request, 'pages/energy_consumption.html')