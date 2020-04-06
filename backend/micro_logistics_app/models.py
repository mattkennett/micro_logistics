from django.contrib.auth.models import AbstractUser
from django.db import models


class SiteUser(AbstractUser):
    organization = models.CharField(max_length=255, blank=True, null=True)
    email_verified = models.BooleanField(default=False)
    provides_stock = models.BooleanField(default=False)
    needs_stock = models.BooleanField(default=False)
    street_1 = models.CharField(max_length=255)
    street_2 = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255)
    county = models.CharField(max_length=255)
    state = models.CharField(max_length=2)
    zip = models.CharField(max_length=9)
    phone = models.CharField(max_length=10)


class StockType(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True, null=True)


class Stock(models.Model):
    user = models.ForeignKey('SiteUser', on_delete=models.CASCADE, related_name='user')
    stock_type = models.ForeignKey('StockType', on_delete=models.CASCADE, related_name='type')
    count = models.IntegerField(default=0)

    class Meta:
        unique_together = ('user', 'stock_type',)


class Claim(models.Model):
    claimed_by = models.ForeignKey('SiteUser', on_delete=models.CASCADE, related_name='claimed_by')
    claimed_from = models.ForeignKey('SiteUser', on_delete=models.CASCADE, related_name='claimed_from')
    stock_type = models.ForeignKey('StockType', on_delete=models.CASCADE, related_name='stock_type')
    count = models.IntegerField(default=0)
    delivery_timestamp = models.DateTimeField(default=None, blank=True, null=True)
