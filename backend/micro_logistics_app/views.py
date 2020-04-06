from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from micro_logistics_app.models import *
from micro_logistics_app.serializers import *


class RegisterView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = NewUserSerializer


class ProfileView(generics.RetrieveUpdateAPIView):
    def retrieve(self, request, **kwargs):
        queryset = request.user
        serializer = UserProfileSerializer(queryset)

        return Response(python_to_js(serializer.data))


class StockTypeView(generics.ListAPIView):
    queryset = StockType.objects.all()
    serializer_class = StockTypeSerializer


class CurrentStockView(generics.ListCreateAPIView):
    def list(self, request, **kwargs):
        stock_objects = Stock.objects.all().filter(user=request.user)

        queryset = []
        for stock in stock_objects:
            queryset.append({
                'name': stock.stock_type.name,
                'count': stock.count,
            })
        serializer = StockSerializer(queryset, many=True)

        return Response(serializer.data)


class StockView(APIView):
    serializer_class = StockSerializer

    def post(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.validated_data)
        else:
            return Response(serializer.errors)


variable_map = {
    'email_verified': 'emailVerified',
    'is_superuser': 'isSuperuser',
    'is_active': 'isActive',
    'date_joined': 'dateJoined',
    'first_name': 'firstName',
    'last_name': 'lastName',
    'provides_stock': 'providesStock',
    'needs_stock': 'needsStock',
    'street_1': 'street1',
    'street_2': 'street2',
    'stock_type': 'stockType',
    'claimed_by': 'claimedBy',
    'claimed_from': 'claimedFrom',
    'delivery_timestamp': 'deliveryTimestamp',
}


def python_to_js(input_object):
    return_object = {}

    for key, value in input_object.items():
        if key in variable_map.keys():
            return_object[variable_map[key]] = input_object[key]
        else:
            return_object[key] = input_object[key]

    return return_object


def js_to_python(input_object):
    return_object = {}

    for key, value in input_object.items():
        if key in variable_map.keys():
            return_object[value] = input_object[key]
        else:
            return_object[key] = input_object[key]

    return return_object
