from django.contrib import admin
from .models import Credential

# Register your models here.

# View that list in admin site
class Admin_credential(admin.ModelAdmin):
    list_display = ('name','lastname','code','blood','degree')

admin.site.register(Credential,Admin_credential)
