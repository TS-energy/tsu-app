from api.views import main
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('',main)
]
