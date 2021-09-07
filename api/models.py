from django.db import models
import string, random

def generate_unique_code ():
    length = 6

    while True :
        code = ''.join(random.choices(string.ascii_uppercase,k=length))
        # make sure that code is unique
        if Data.objects.filter(code=code).count() == 0:
            break
    return code

# Create your models here.
class Data(models.Model):
    code = models.CharField(max_length=10,default="", unique=True)
    host = models.CharField(max_length=50,unique=True)
    is_or_not = models.BooleanField(null=False, default=False) # only for boolean field test
    int_field = models.IntegerField(null=False, default=1) # only for integer field test
    created_at = models.DateTimeField(auto_now_add=True)