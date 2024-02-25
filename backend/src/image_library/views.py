from utils.views import ModelViewSet
from image_library.models import Image
from image_library.serializers import ImageSerializer
from rest_framework.parsers import MultiPartParser

class ImageView(ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    parser_classes = (MultiPartParser, )