from django.db import models
from model_utils.models import TimeStampedModel


class Stats(TimeStampedModel):
    user_number = models.PositiveIntegerField(
        verbose_name=u'User number in the system'
    )

    total_recipe_number = models.PositiveIntegerField(
        verbose_name=u'Total Recipes number in the system'
    )

    public_recipe_number = models.PositiveIntegerField(
        verbose_name=u'Public Recipes number in the system'
    )

    private_recipe_number = models.PositiveIntegerField(
        verbose_name=u'Private Recipes number in the system'
    )

