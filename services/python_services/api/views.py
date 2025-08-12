from django.shortcuts import render

from django.http import JsonResponse

def py_test(request):
    print("Received request at Django service")
    return JsonResponse({"message": "Hello from Django service"})
# Create your views here.
