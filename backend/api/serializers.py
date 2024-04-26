from rest_framework import serializers
from .models import HouseData

class HouseDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseData
        fields = '__all__'
