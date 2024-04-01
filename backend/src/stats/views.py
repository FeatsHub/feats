from utils.views import ModelViewSet
from stats.models import Stats
from stats.serializers import StatsSerializer
from rest_framework import mixins, viewsets
from stats.filters import StatsFilter



class StatsView(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
):
    queryset = Stats.objects.all()
    serializer_class = StatsSerializer
    filterset_class = StatsFilter
