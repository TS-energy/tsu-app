from api.models import Data
from api.views import main
from api.views import DataView
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('hi',main),
    path('data',DataView.as_view())

]
