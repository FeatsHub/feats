from utils.views import ModelViewSet
from food.models import Recipe, RecipeCategory, RecipeIngredient, RecipeList
from food.serializers import RecipeSerializer, RecipeCategorySerializer, RecipeIngredientSerializer, RecipeListSerializer
from rest_framework import mixins, viewsets
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
    filterset_fields = ('category', 'owner')
    filter_backends = (SearchFilter, DjangoFilterBackend)
    search_fields = ('name', 'ingredients__product__name')

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
        list_id = request.data.get('list_id', None)
        is_def_list = list_id is None

        # Filtering
        lists = request.user.recipe_lists.all()
        if list_id is not None:
            list = lists.get(id=list_id)
        else:
            list = lists.filter(is_default_list=is_def_list).first()

        # Remove
        if self.get_object().saved_by.filter(id=request.user.id).exists():
            self.get_object().saved_by.remove(request.user)
            list.recipes.remove(self.get_object())
        # Add
        else:
            self.get_object().saved_by.add(request.user)
            list.recipes.add(self.get_object())
        return Response(self.serializer_class(self.get_object()).data)


class RecipeCategoryView(ModelViewSet):
    queryset = RecipeCategory.objects.all()
    serializer_class = RecipeCategorySerializer


class RecipeIngredientView(ModelViewSet):
    queryset = RecipeIngredient.objects.all()
    serializer_class = RecipeIngredientSerializer



class RecipeListView(ModelViewSet):
    queryset = RecipeList.objects.all()
    serializer_class = RecipeListSerializer
    filterset_fields = (
        'owner',
    )
