# Generated by Django 4.2.3 on 2024-03-27 15:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '__first__'),
        ('food', '0004_recipelist_is_default_list'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipeingredient',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.product'),
        ),
        migrations.DeleteModel(
            name='Product',
        ),
    ]
