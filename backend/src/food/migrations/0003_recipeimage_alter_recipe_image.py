# Generated by Django 4.2.3 on 2024-01-25 10:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0002_alter_recipe_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecipeImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(null=True, upload_to='repice/', verbose_name='Recipe image')),
            ],
        ),
        migrations.AlterField(
            model_name='recipe',
            name='image',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='food.recipeimage', verbose_name='Recipe image'),
        ),
    ]
