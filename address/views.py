from drf_yasg.utils import swagger_auto_schema
from rest_framework import generics
from rest_framework.permissions import AllowAny

from address.models import Address
from address.serializers import AddressSerializer


class AddressCreateListView(generics.ListAPIView, generics.CreateAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    permission_classes = [AllowAny]

    @swagger_auto_schema(operation_id="getAddress",
                         operation_description="get list of address")
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    @swagger_auto_schema(operation_id="createAddress",
                         operation_description="create a new Address")
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
