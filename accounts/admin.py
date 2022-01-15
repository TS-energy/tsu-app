from django.contrib import admin

# Register your models here.
from .models import Listings

# @admin.register(Listings)

## the simplest way to regist the model
admin.site.register(Listings)