from rest_framework import serializers

from .models import Data

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = ('id','code','host','is_or_not','int_field','created_at')