from django.contrib.auth.mixins import PermissionRequiredMixin
from rest_framework import mixins, viewsets

from drf_spectacular.utils import OpenApiParameter, extend_schema
from drf_spectacular.types import OpenApiTypes

@extend_schema(
    parameters=[
        OpenApiParameter(
            name='expand',
            description='List of nested objects',
            type=OpenApiTypes.STR,
            location=OpenApiParameter.QUERY,
        )
    ]
)
@extend_schema(
    parameters=[
        OpenApiParameter(
            name='fields',
            description='List of nested objects',
            type=OpenApiTypes.STR,
            location=OpenApiParameter.QUERY,
        )
    ]
)
class ModelViewSet(
    viewsets.GenericViewSet,
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.ListModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    PermissionRequiredMixin
):
    pass
