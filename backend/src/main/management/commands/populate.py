from food.initial_values.food_category import initial_values as food_category_values
from product.initial_values.product_allergens import initial_values as allergens_values

from food.models import RecipeCategory
from product.models import ProductAllergen
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = 'Populate command'

    def add_arguments(self, parser):
        parser.add_argument('-m', '--model', type=str, help='Model name')

    def handle(self, *args, **kwargs):
        model = kwargs['model']
        if model in ['RecipeCategory', None]:
            if not RecipeCategory.objects.all().exists():
                for i in food_category_values:
                    print(f'Creating RecipeCategory {i["name"]}...')
                    RecipeCategory.objects.create(**i)

        if model in ['ProductAllergen', None]:
            if not ProductAllergen.objects.all().exists():
                for i in allergens_values:
                    print(f'Creating ProductAllergen {i["name"]}...')
                    ProductAllergen.objects.create(**i)
        print('Run command successfully')
