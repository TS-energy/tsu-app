from api.serializers import DataSerializer
from .models import Data
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics

# Create your views here.

# a hi request for test
def main(request) :
    return HttpResponse("Hello")

class DataView(generics.CreateAPIView):
    queryset = Data.objects.all()
    serializer_class = DataSerializer