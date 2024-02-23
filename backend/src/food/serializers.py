from utils.serializers import DynamicModelSerializer
from food.models import Recipe, RecipeCategory, RecipeIngredient, RecipeImage, Product
from drf_writable_nested import WritableNestedModelSerializer
from rest_framework import serializers

class RecipeCategorySerializer(DynamicModelSerializer):
    class Meta:
        model = RecipeCategory
        fields = '__all__'


class RecipeImageSerializer(DynamicModelSerializer):
    class Meta:
        model = RecipeImage
        fields = '__all__'


class RecipeIngredientSerializer(DynamicModelSerializer):
    product_name = serializers.SlugRelatedField(
        source='product',
        read_only=True,
        slug_field='name'
    )

    class Meta:
        model = RecipeIngredient
        fields = '__all__'


class RecipeSerializer(WritableNestedModelSerializer, DynamicModelSerializer):
    image_data = RecipeImageSerializer(read_only=True, source='image')
    category_data = RecipeCategorySerializer(many=True, read_only=True, source='category')
    ingredients = RecipeIngredientSerializer(many=True)  # Writable

    class Meta:
        model = Recipe
        fields = (
            'id',
            'name',
            'description',
            'diners',
            'time',
            'category',
            'ingredients',
            'image',
            'image_data',
            'category_data',
            'is_public',
            'owner',
            'saved_by'
        )
        read_only_fields = (
            'id',
            'image_data',
            'category_data',
            'owner',
            'saved_by'
        )

    def create(self, validated_data):
        validated_data['owner'] = self.context['request'].user
        return super().create(validated_data)


class ProductSerializer(DynamicModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id',
            'name'
        )
        read_only_fields = (
            'id',
        )
