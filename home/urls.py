from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('blog/', views.blog, name='blog'),
    path('single_blog/', views.single_blog, name='single_blog'),
    path('contact/', views.contact, name='contact'),
    path('profile/', views.profile, name='profile'),
    path('register/', views.reg, name='reg'),
    path('login/', views.login, name='login'),
    path('ages/', views.ages, name='ages'),
    path('test/', views.test, name='test'),
    path('test2/', views.test2, name='test2'),
    path('paint/', views.paint, name='paint'),
    path('addition/', views.addition, name='addition'),
]
