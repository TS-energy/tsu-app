from django.db import models

# Create your models here.
class Transports(models.Model):
    transport_name = models.CharField(max_length=100)
    carbon_dioxide_emsission = models.DecimalField(max_digits=10,decimal_places=2)

    def __str__(self):
        return self.transport_name
    
    def __int__(self):
        return self.carbon_dioxide_emsission

class Gas(models.Model):
    province = models.CharField(max_length=20)
    gas_price_km3 = models.IntegerField()
    co2_coefficient = models.DecimalField(max_digits=10,decimal_places=5)

    def __str__(self):
        return self.province

class Electricity(models.Model):
    province = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=10,decimal_places=5)

    def __str__(self):
        return self.province