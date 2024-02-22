from django.db import models
from user.models import User

class RecipeImage(models.Model):
    image = models.FileField(
        verbose_name=u'Recipe image',
        upload_to='repice/',
        null=True
    )


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
        verbose_name=u'Recipe image',
        to=RecipeImage,
        null=True,
        on_delete=models.SET_NULL
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
    product = models.ForeignKey(
        to='Product',
        on_delete=models.CASCADE
    )

    quantity = models.PositiveIntegerField(
        verbose_name=u'Ingredient quantity',
    )

    unit = models.CharField(
        verbose_name=u'Measure unit',
    )


class Product(models.Model):
    name = models.CharField(
        verbose_name=u'Product name',
        unique=True
    )
