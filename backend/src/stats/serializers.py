from utils.serializers import DynamicModelSerializer
from stats.models import Stats


class StatsSerializer(DynamicModelSerializer):
    class Meta:
        model = Stats
        fields = (
            'id',
            'created',
            'modified',
            'user_number',
            'total_recipe_number',
            'public_recipe_number',
            'private_recipe_number'
        )
        read_only_fields = (
            'id',
            'created',
            'modified',
        )
