from django.core.management.base import BaseCommand

from micro_logistics_app.models import *


class Command(BaseCommand):
    help = ''

    def handle(self, *args, **kwargs):
        initial_stock_type = StockType(stock_type='3D Printed Face Shield')
        initial_stock_type.save()

