from django.shortcuts import render
from rest_framework import viewsets
from .serializer import CredentialSerializer
from .models import Credential
# Create your views here.



class CredentialView(viewsets.ModelViewSet):
    serializer_class = CredentialSerializer
    queryset = Credential.objects.all()
