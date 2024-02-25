from utils.serializers import DynamicModelSerializer
from image_library.models import Image

class ImageSerializer(DynamicModelSerializer):
    class Meta:
        model = Image
        fields = (
            'id',
            'image',
        )
        read_only_fields = (
            'id',
        )