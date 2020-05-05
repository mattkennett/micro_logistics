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


class StockSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = (
            'id',
            'user',
            'stock_type',
            'count',
        )


class ClaimInputSerializer(serializers.Serializer):
    stock_id = serializers.IntegerField()
    count = serializers.IntegerField()

    def validate_count(self, count):
        if count < 1:
            raise serializers.ValidationError('Count must be a positive integer')

        try:
            stock_object = Stock.objects.get(pk=self.initial_data['stock_id'])
            if count > stock_object.count:
                raise serializers.ValidationError('Invalid claim request')
        except Stock.DoesNotExist:
            raise serializers.ValidationError('Invalid stockId')
        except Exception as e:
            raise e

        return count

    def save(self, **kwargs):
        # self.validated_data has all of our validated variables at this point
        user = kwargs.get('user', None)

        if not user:
            raise serializers.ValidationError('User Must Be Passed to StockSerializer to save')

        try:
            existing_stock = Stock.objects.get(pk=self.validated_data['stock_id'])
            new_claim = Claim(
                claimed_by=user,
                claimed_from=existing_stock.user,
                stock_type=existing_stock.stock_type,
                count=self.validated_data['count'],
            )

            new_claim.save()

            existing_stock.count = existing_stock.count - self.validated_data['count']
            existing_stock.save()
        except Exception as e:
            raise e


class ClaimModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Claim
        fields = (
            'claimed_by',
            'claimed_from',
            'stock_type',
            'count',
            'delivery_timestamp',
        )


class StockTypeModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockType
        fields = (
            'id',
            'name',
            'description',
        )
