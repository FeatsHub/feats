from utils.views import ModelViewSet
from food.models import Recipe, RecipeCategory, RecipeIngredient, Product
from food.serializers import RecipeSerializer, RecipeCategorySerializer, RecipeIngredientSerializer, ProductSerializer
from rest_framework import mixins, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from drf_spectacular.utils import extend_schema
from utils.serializers import EmptySerializer
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend


class RecipeView(ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filterset_fields = ('category', )
    filter_backends = (SearchFilter, DjangoFilterBackend)
    search_fields = ('name', 'ingredients__product__name')

    @extend_schema(
        request=EmptySerializer,
        responses={200: RecipeSerializer}
    )
    @action(detail=True, methods=['post'])
    def save(self, request, *args, **kwargs):
        if self.get_object().saved_by.filter(id=request.user.id).exists():
            self.get_object().saved_by.remove(request.user)
        else:
            self.get_object().saved_by.add(request.user)
        return Response(self.serializer_class(self.get_object()).data)


class RecipeCategoryView(ModelViewSet):
    queryset = RecipeCategory.objects.all()
    serializer_class = RecipeCategorySerializer


class RecipeIngredientView(ModelViewSet):
    queryset = RecipeIngredient.objects.all()
    serializer_class = RecipeIngredientSerializer


class ProductView(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.CreateModelMixin
):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (SearchFilter, DjangoFilterBackend)
    search_fields = ('name', )
    filterset_fields = ('name', )

    @action(methods=["post"], detail=False)
    def get_or_create(self, request, *args, **kwargs):
        """
        Method to create a tag (if exist return tag selected)
        """
        try:
            data = request.data
            name = data.get("name", None)
            tag = Product.objects.get(name__iexact=name)
            return Response(self.serializer_class(tag).data)
        except Product.DoesNotExist:
            return super().create(request=request, *args, **kwargs)
