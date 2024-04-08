from recipe.initial_values.food_category import initial_values as food_category_values
from recipe.initial_values.food_allergens import initial_values as allergens_values
from recipe.initial_values.food_foods import initial_values as foods_values

from recipe.models import RecipeCategory, FoodAllergen, Food
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = 'Populate command'

    def add_arguments(self, parser):
        parser.add_argument('-m', '--model', type=str, help='Model name', required=False)

    def handle(self, *args, **kwargs):
        model = kwargs['model']
        if model in ['RecipeCategory', None]:
            if not RecipeCategory.objects.all().exists():
                for i in food_category_values:
                    print(f'Creating RecipeCategory {i["name"]}...')
                    RecipeCategory.objects.create(**i)

        if model in ['FoodAllergen', None]:
            if not FoodAllergen.objects.all().exists():
                for i in allergens_values:
                    print(f'Creating FoodAllergen {i["name"]}...')
                    FoodAllergen.objects.create(**i)

        if model in ['Food', None]:
            if not Food.objects.all().exists():
                for i in foods_values:
                    print(f'Creating Food {i}...')
                    Food.objects.get_or_create(**{
                        'name': i
                    })

        print('Run command successfully')
