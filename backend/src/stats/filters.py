from django_filters import FilterSet, DateFilter
from stats.models import Stats

class StatsFilter(FilterSet):
    start = DateFilter(field_name='created', lookup_expr='gte')
    end = DateFilter(field_name='created', lookup_expr='lte')

    class Meta:
        model = Stats
        fields = ('start', 'end')