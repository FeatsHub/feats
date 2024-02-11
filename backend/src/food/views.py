from utils.views import ModelViewSet
from food.models import Recipe, RecipeCategory, RecipeIngredient, RecipeImage
from food.serializers import RecipeSerializer, RecipeCategorySerializer, RecipeIngredientSerializer, RecipeImageSerializer
from rest_framework import mixins, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from drf_spectacular.utils import extend_schema
from utils.serializers import EmptySerializer

# Create your views here.

class RecipeView(ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filterset_fields = ('category', )

    @extend_schema(
        request=EmptySerializer,
    )
    @action(detail=True, methods=['post'])
    def save(self, request, *args, **kwargs):
        if self.get_object().saved_by.filter(id=request.user.id).exists():
            self.get_object().saved_by.remove(request.user)
        else:
            self.get_object().saved_by.add(request.user)
        return Response(self.serializer_class(self.get_object()).data)

class RecipeImageView(
    viewsets.GenericViewSet,
    mixins.CreateModelMixin,
    mixins.DestroyModelMixin
):
    queryset = RecipeImage.objects.all()
    serializer_class = RecipeImageSerializer


class RecipeCategoryView(ModelViewSet):
    queryset = RecipeCategory.objects.all()
    serializer_class = RecipeCategorySerializer


class RecipeIngredientView(ModelViewSet):
    queryset = RecipeIngredient.objects.all()
    serializer_class = RecipeIngredientSerializer
