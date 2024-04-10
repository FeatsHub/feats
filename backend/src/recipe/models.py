from django.db import models
from user.models import User


class Recipe(models.Model):
    """ Recipe, Plate, Meal """
    name = models.CharField(
        verbose_name=u'Food name'
    )

    description = models.CharField(
        verbose_name=u'Food description'
    )

    diners = models.PositiveIntegerField(
        verbose_name=u'Diners number'
    )

    time = models.PositiveIntegerField(
        verbose_name=u'Cooking time in minutes'
    )

    category = models.ManyToManyField(
        verbose_name=u'Food categories',
        to='RecipeCategory',
        blank=True
    )

    ingredients = models.ManyToManyField(
        verbose_name=u'Food ingredients',
        to='RecipeIngredient',
        blank=True
    )

    owner = models.ForeignKey(
        to=User,
        related_name='created_recipes',
        verbose_name = u'User recipe creator',
        on_delete=models.CASCADE
    )

    is_public = models.BooleanField(
        verbose_name = u'Recipe status',
        default=True
    )

    saved_by = models.ManyToManyField(
        to=User,
        related_name='saved_recipes',
        verbose_name=u'User saved recipes',
        blank=True,
    )

    image = models.ForeignKey(
        to='image_library.Image',
        on_delete=models.SET_NULL,
        null=True
    )

    @property
    def allergens(self):
        allergens = ''

        for ingredient in self.ingredients.all():
            for allergen in ingredient.product.allergens.all():
                allergens = allergens + f' {allergen.emoji}'

        return allergens


class RecipeList(models.Model):
    is_default_list = models.BooleanField(
        default=False,
    )

    name = models.CharField(
        verbose_name=u'List name'
    )

    owner = models.ForeignKey(
        to=User,
        related_name='recipe_lists',
        on_delete=models.CASCADE
    )

    recipes = models.ManyToManyField(
        to=Recipe,
        blank=True
    )


class RecipeCategory(models.Model):
    """ Recipe category """
    name = models.CharField(
        verbose_name=u'Category name',
        max_length=16,
        unique=True
    )


class RecipeIngredient(models.Model):
    """ Recipe ingredient """
    food = models.ForeignKey(
        to='recipe.Food',
        on_delete=models.CASCADE
    )

    quantity = models.PositiveIntegerField(
        verbose_name=u'Ingredient quantity',
    )

    unit = models.CharField(
        verbose_name=u'Measure unit',
    )


class Food(models.Model):
    name = models.CharField(
        verbose_name=u'Product name',
        unique=True
    )

    allergens = models.ManyToManyField(
        to='FoodAllergen',
        blank=True
    )


class FoodAllergen(models.Model):
    name = models.CharField(
        verbose_name=u'Allergen name',
        unique=True
    )

    emoji = models.CharField(
        verbose_name=u'Allergen emoji',
        null=True
    )


class RecipeStep(models.Model):
    recipe = models.ForeignKey(
        to='Recipe',
        on_delete=models.CASCADE,
        related_name='steps'
    )

    number = models.PositiveIntegerField(
        verbose_name=u'Step order'
    )

    description = models.TextField(
        verbose_name=u'Step text description',
        null=True
    )

    related_recipes = models.ManyToManyField(
        to='Recipe',
        blank=True
    )
