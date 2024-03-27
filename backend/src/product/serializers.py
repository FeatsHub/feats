from product.models import Product, ProductAllergen
from utils.serializers import DynamicModelSerializer


class ProductSerializer(DynamicModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'allergens'
        )
        read_only_fields = (
            'id',
        )


class ProductAllergenSerializer(DynamicModelSerializer):
    class Meta:
        model = ProductAllergen
        fields = (
            'id',
            'name'
        )
        read_only_fields = (
            'id',
        )
