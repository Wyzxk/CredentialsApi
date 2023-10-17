from rest_framework import serializers
from .models import Credential

# Serializer Credential Model
class CredentialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Credential
        fields = '__all__'