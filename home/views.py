from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def blog(request):
    return render(request, 'blog.html')


def single_blog(request):
    return render(request, 'single_blog.html')


def contact(request):
    return render(request, 'contact.html')


def profile(request):
    return render(request, 'profile.html')


def reg(request):
    return render(request, 'reg.html')


def login(request):
    return render(request, 'login.html')


def paint(request):
    return render(request, 'paint.html')


def ages(request):
    return render(request, 'ages.html')
