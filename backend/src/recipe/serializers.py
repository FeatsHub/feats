from utils.serializers import DynamicModelSerializer
from recipe.models import Recipe, RecipeCategory, RecipeIngredient, RecipeList, Food, FoodAllergen, RecipeStep
from rest_framework import serializers
from image_library.serializers import ImageSerializer
from user.serializers import RecipeOwnerSerializer
from drf_writable_nested.serializers import WritableNestedModelSerializer
from drf_spectacular.utils import extend_schema_field


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
    related_recipes_data = RelatedRecipeSerializer(source="related_recipes", many=True, read_only=True)

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
    saved = serializers.SerializerMethodField(read_only=True)

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
            'saved'
        )
        read_only_fields = (
            'id',
            'image_data',
            'category_data',
            'owner',
            'saved_by',
            'allergens',
            'creator',
            'saved'
        )

    def create(self, validated_data):
        validated_data['owner'] = self.context['request'].user
        return super().create(validated_data)

    @extend_schema_field(field=serializers.BooleanField)
    def get_saved(self, object):
        request = self.request if hasattr(self, 'request') else self.context.get('request')
        return RecipeList.objects.filter(
            owner=request.user,
            recipes=object
        ).exists()


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
