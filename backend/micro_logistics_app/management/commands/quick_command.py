from django.core.management.base import BaseCommand

from micro_logistics_app.models import *


class Command(BaseCommand):
    help = ''

    def handle(self, *args, **kwargs):
        # initial_stock_type = StockType(name='3D Printed Face Shield')
        # initial_stock_type.save()

        try:
            stock_object = Stock.objects.get(pk=9001)
        except Stock.DoesNotExist:
            print ('Invalid query.')
