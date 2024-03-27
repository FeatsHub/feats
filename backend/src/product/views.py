from product.models import Product, ProductAllergen
from product.serializers import ProductSerializer, ProductAllergenSerializer
from utils.views import ModelViewSet


class ProductView(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    search_fields = ('name', )
    filterset_fields = ('name', )


class ProductAllergenView(ModelViewSet):
    queryset = ProductAllergen.objects.all()
    serializer_class = ProductAllergenSerializer
    search_fields = ('name', )
    filterset_fields = ('name', )
