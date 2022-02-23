from django.contrib import admin

# Register your models here.
from .models import Transports,Gas,Electricity

admin.site.register(Transports)

admin.site.register(Gas)

admin.site.register(Electricity)
