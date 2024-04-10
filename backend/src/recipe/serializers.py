from utils.serializers import DynamicModelSerializer
from recipe.models import Recipe, RecipeCategory, RecipeIngredient, RecipeList, Food, FoodAllergen, RecipeStep
from rest_framework import serializers
from image_library.serializers import ImageSerializer
from user.serializers import RecipeOwnerSerializer
from drf_writable_nested.serializers import WritableNestedModelSerializer


class RecipeCategorySerializer(DynamicModelSerializer):
    class Meta:
        model = RecipeCategory
        fields = '__all__'


class RecipeIngredientSerializer(DynamicModelSerializer):
    food_name = serializers.SlugRelatedField(
        source='food',
        read_only=True,
        slug_field='name'
    )

    class Meta:
        model = RecipeIngredient
        fields = '__all__'


class RelatedRecipeSerializer(DynamicModelSerializer):
    image_data = ImageSerializer(read_only=True, source='image')
    ingredients = RecipeIngredientSerializer(many=True)

    class Meta:
        model = Recipe
        fields = (
            'id',
            'name',
            'image_data',
            'ingredients'
        )
        read_only_fields = fields


class RecipeStepSerializer(DynamicModelSerializer):
    related_recipes_data = RelatedRecipeSerializer(many=True, read_only=True)

    class Meta:
        model = RecipeStep
        fields = (
            'id',
            'recipe',
            'number',
            'description',
            'related_recipes',
            'related_recipes_data'
        )
        read_only_fields = (
            'id',
            'related_recipes_data'
        )


class RecipeSerializer(DynamicModelSerializer, WritableNestedModelSerializer):
    image_data = ImageSerializer(read_only=True, source='image')
    category_data = RecipeCategorySerializer(many=True, read_only=True, source='category')
    ingredients = RecipeIngredientSerializer(many=True) # Writable
    creator = RecipeOwnerSerializer(source='owner', read_only=True)
    steps = RecipeStepSerializer(many=True) # Writable

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
            'saved_by',
            'allergens',
            'creator',
            'steps',
        )
        read_only_fields = (
            'id',
            'image_data',
            'category_data',
            'owner',
            'saved_by',
            'allergens',
            'creator',
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


class FoodSerializer(DynamicModelSerializer):
    class Meta:
        model = Food
        fields = (
            'id',
            'name',
            'allergens'
        )
        read_only_fields = (
            'id',
        )


class FoodAllergenSerializer(DynamicModelSerializer):
    class Meta:
        model = FoodAllergen
        fields = (
            'id',
            'name',
            'emoji'
        )
        read_only_fields = (
            'id',
        )
