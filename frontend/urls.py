from django.urls import path
from .views import calculator, index


urlpatterns = [
    path('', index,name="defaultpage"),
    path('signup',index,name="signup"),
    path('signin',index, name="signin"),
    path('calculator',calculator,name="calculator")
]