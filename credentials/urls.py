from django.contrib import admin
from django.urls import path,include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from credentials import views

# Api versioning urls
router = routers.DefaultRouter()
router.register(r'credentials', views.CredentialView, 'credential')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Credential API'))
]
