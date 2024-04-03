from django.db import models


class Settings(models.Model):
    user = models.OneToOneField(
        to='user.User',
        on_delete=models.CASCADE,
    )

    allergens = models.ManyToManyField(
        to='recipe.'
    )

