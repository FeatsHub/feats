from django.db import models


class Product(models.Model):
    name = models.CharField(
        verbose_name=u'Product name',
        unique=True
    )

    allergens = models.ManyToManyField(
        to='ProductAllergen',
        blank=True
    )


class ProductAllergen(models.Model):
    name = models.CharField(
        verbose_name=u'Allergen name'
    )

    emoji = models.CharField(
        verbose_name=u'Allergen emoji',
        null=True
    )

    image_url = models.CharField(
        verbose_name=u'Allergen image',
        null=True
    )
