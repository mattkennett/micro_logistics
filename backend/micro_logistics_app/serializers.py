from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from micro_logistics_app.models import *
from micro_logistics_app.validators import *


class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteUser
        fields = (
            'email',
            'password',
            'first_name',
            'last_name',
            'organization',
            'provides_stock',
            'needs_stock',
            'street_1',
            'street_2',
            'city',
            'county',
            'state',
            'zip',
            'phone',
        )

        extra_kwargs = {
            'email': {
                'validators': [UniqueValidator(queryset=SiteUser.objects.all())],
            }
        }

    def create(self, validated_data):
        new_site_user = SiteUser(**validated_data)
        new_site_user.username = validated_data['email']
        new_site_user.set_password(validated_data['password'])
        new_site_user.save()
        return new_site_user


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteUser
        fields = (
            'id',
            'email',
            'email_verified',
            'is_superuser',
            'is_active',
            'date_joined',
            'first_name',
            'last_name',
            'organization',
            'provides_stock',
            'needs_stock',
            'street_1',
            'street_2',
            'city',
            'county',
            'state',
            'zip',
            'phone',
        )

        read_only_fields = (
            'id',
            'email_verified',
            'is_superuser',
            'is_active',
            'date_joined',
        )

        extra_kwargs = {
            'email': {
                'validators': [UniqueValidator(queryset=SiteUser.objects.all())],
            }
        }


class StockTypeSerializer(serializers.Serializer):
    name = serializers.CharField(
        max_length=255,
        validators=(StockTypeNameExists(),),
    )
    description = serializers.CharField(max_length=255)


class StockSerializer(serializers.Serializer):
    name = serializers.CharField(
        max_length=255,
        validators=(StockTypeNameExists(),),
    )
    count = serializers.IntegerField()

    def save(self, **kwargs):
        user = kwargs.get('user', None)

        if not user:
            raise serializers.ValidationError('User Must Be Passed to StockSerializer to save')

        stock_type_object = StockType.objects.get(name=self.validated_data['name'])

        try:
            update_stock = Stock.objects.all().get(
                user=user,
                stock_type=stock_type_object
            )

            update_stock.count += self.validated_data['count']
            update_stock.save()
            return update_stock
        except Stock.DoesNotExist:
            new_stock = Stock(
                user=user,
                stock_type=stock_type_object,
                count=self.validated_data['count'],
            )
            new_stock.save()
            return new_stock
