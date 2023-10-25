from django.db import models

# Create your models here.

# Credential Model
class Credential(models.Model):
    name = models.CharField(max_length=20)
    lastname = models.CharField(max_length=30)
    code = models.IntegerField()
    blood = models.CharField(max_length=5)
    degree = models.CharField(max_length=20)
    mail = models.EmailField(max_length=254)
    phone = models.BigIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to="images",null=True)  

 