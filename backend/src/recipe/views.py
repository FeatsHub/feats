from utils.views import ModelViewSet
from recipe.models import Recipe, RecipeCategory, RecipeIngredient, RecipeList, Food, FoodAllergen, RecipeStep
from recipe.serializers import RecipeSerializer, RecipeCategorySerializer, RecipeIngredientSerializer, RecipeListSerializer, FoodSerializer, FoodAllergenSerializer, RecipeStepSerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from drf_spectacular.utils import extend_schema
from utils.serializers import EmptySerializer
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from drf_spectacular.utils import OpenApiParameter, extend_schema
from drf_spectacular.types import OpenApiTypes


class RecipeView(ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filterset_fields = ('category', 'owner', 'is_public')
    filter_backends = (SearchFilter, DjangoFilterBackend)
    search_fields = ('name', 'ingredients__food__name')

    @extend_schema(
        parameters=[
            OpenApiParameter(
                name='list_id',
                description='List ID',
                type=OpenApiTypes.STR,
                location=OpenApiParameter.QUERY,
            )
        ]
    )
    @extend_schema(
        request=EmptySerializer,
        responses={200: RecipeSerializer}
    )
    @action(detail=True, methods=['post'])
    def save(self, request, *args, **kwargs):
        # Params
        list_id = request.GET.get('list_id', None)
        is_def_list = list_id is None

        # Filtering
        lists = request.user.recipe_lists.all()
        if list_id is not None:
            list = lists.get(id=list_id)
        else:
            list = lists.filter(is_default_list=is_def_list).first()

        # Remove
        if RecipeList.objects.filter(
            id=list.id,
            owner=request.user,
            recipes=self.get_object()
        ).exists():
            list.recipes.remove(self.get_object())
        else:
            list.recipes.add(self.get_object())

        self.serializer_class.request = request
        return Response(self.serializer_class(self.get_object()).data)


class RecipeCategoryView(ModelViewSet):
    queryset = RecipeCategory.objects.all().order_by('?')
    serializer_class = RecipeCategorySerializer
    filter_backends = (SearchFilter, DjangoFilterBackend)
    search_fields = ('name', )


class RecipeIngredientView(ModelViewSet):
    queryset = RecipeIngredient.objects.all()
    serializer_class = RecipeIngredientSerializer


class RecipeListView(ModelViewSet):
    queryset = RecipeList.objects.all()
    serializer_class = RecipeListSerializer
    filterset_fields = (
        'owner',
        'recipes'
    )


class FoodView(ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
    search_fields = ('name', )
    filterset_fields = ('name', )


class FoodAllergenView(ModelViewSet):
    queryset = FoodAllergen.objects.all()
    serializer_class = FoodAllergenSerializer
    search_fields = ('name', )
    filterset_fields = ('name', )


class RecipeStepView(ModelViewSet):
    queryset = RecipeStep.objects.all()
    serializer_class = RecipeStepSerializer
