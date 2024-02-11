from rest_framework import serializers
from utils.serializers import DynamicModelSerializer
from food.models import Recipe, RecipeCategory, RecipeIngredient, RecipeImage


class RecipeCategorySerializer(DynamicModelSerializer):
    class Meta:
        model = RecipeCategory
        fields = '__all__'


class RecipeImageSerializer(DynamicModelSerializer):
    class Meta:
        model = RecipeImage
        fields = '__all__'


class RecipeSerializer(DynamicModelSerializer):
    image_data = RecipeImageSerializer(read_only=True, source='image')
    category_data = RecipeCategorySerializer(many=True, read_only=True, source='category')

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

class RecipeIngredientSerializer(DynamicModelSerializer):
    class Meta:
        model = RecipeIngredient
        fields = '__all__'