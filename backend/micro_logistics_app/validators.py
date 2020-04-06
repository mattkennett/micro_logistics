from rest_framework import serializers

from micro_logistics_app.models import *


class StockTypeNameExists(object):
    def __call__(self, name):
        name_exists = StockType.objects.all().filter(name=name).count()

        if not name_exists:
            raise serializers.ValidationError('Invalid Stock Type Name')
