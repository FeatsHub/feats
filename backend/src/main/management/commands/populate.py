from food.initial_values.food_category import initial_values
from food.models import RecipeCategory
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = 'Populate command'

    def add_arguments(self, parser):
        parser.add_argument('-m', '--model', type=str, help='Model name')

    def handle(self, *args, **kwargs):
        model = kwargs['model']
        if model in ['RecipeCategory', None]:
            if not RecipeCategory.objects.all().exists():
                for i in initial_values:
                    print(f'Creating RecipeCategory {i["name"]}...')
                    RecipeCategory.objects.create(**i)
        print('Run command successfully')
