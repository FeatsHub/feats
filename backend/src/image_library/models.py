from django.db import models

class Image(models.Model):
    image = models.FileField(
        verbose_name=u'Recipe image',
        upload_to='images/',
        null=True
    )