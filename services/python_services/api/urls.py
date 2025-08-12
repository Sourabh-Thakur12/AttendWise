from django.urls import path, include
from django.contrib import admin

from . import views

urlpatterns = [
    path("", views.py_test, name="py_test")
]


