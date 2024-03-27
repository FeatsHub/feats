from utils.serializers import DynamicModelSerializer
from food.models import Recipe, RecipeCategory, RecipeIngredient, RecipeList
from drf_writable_nested import WritableNestedModelSerializer
from rest_framework import serializers
from image_library.serializers import ImageSerializer

class RecipeCategorySerializer(DynamicModelSerializer):
    class Meta:
        model = RecipeCategory
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
    image_data = ImageSerializer(read_only=True, source='image')
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

class RecipeListSerializer(DynamicModelSerializer):
    recipes_data = RecipeSerializer(many=True, source='recipes', read_only=True)

    class Meta:
        model = RecipeList
        fields = (
            'id',
            'name',
            'owner',
            'recipes',
            'is_default_list',
            'recipes_data'
        )
        read_only_fields = (
            'id',
            'recipes_data'
        )