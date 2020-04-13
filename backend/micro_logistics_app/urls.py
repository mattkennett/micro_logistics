from django.urls import path

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from micro_logistics_app.views import *

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('register/', RegisterView.as_view(), name='register'),
    path('profile/', ProfileView.as_view(), name='profile'),

    path('stock_type/', StockTypeView.as_view(), name='stock_type'),
    path('current_stock/', CurrentStockView.as_view(), name='current_stock'),
    path('stock/', StockView.as_view(), name='stock'),
    path('stock/search/', StockSearchView.as_view(), name='stock_search'),
]
