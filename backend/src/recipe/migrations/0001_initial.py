# Generated by Django 4.2.3 on 2024-04-03 11:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('image_library', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(unique=True, verbose_name='Product name')),
            ],
        ),
        migrations.CreateModel(
            name='FoodAllergen',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(unique=True, verbose_name='Allergen name')),
                ('emoji', models.CharField(null=True, verbose_name='Allergen emoji')),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(verbose_name='Food name')),
                ('description', models.CharField(verbose_name='Food description')),
                ('diners', models.PositiveIntegerField(verbose_name='Diners number')),
                ('time', models.PositiveIntegerField(verbose_name='Cooking time in minutes')),
                ('is_public', models.BooleanField(default=True, verbose_name='Recipe status')),
            ],
        ),
        migrations.CreateModel(
            name='RecipeCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=16, unique=True, verbose_name='Category name')),
            ],
        ),
        migrations.CreateModel(
            name='RecipeList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_default_list', models.BooleanField(default=False)),
                ('name', models.CharField(verbose_name='List name')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recipe_lists', to=settings.AUTH_USER_MODEL)),
                ('recipes', models.ManyToManyField(blank=True, to='recipe.recipe')),
            ],
        ),
        migrations.CreateModel(
            name='RecipeIngredient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField(verbose_name='Ingredient quantity')),
                ('unit', models.CharField(verbose_name='Measure unit')),
                ('food', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='recipe.food')),
            ],
        ),
        migrations.AddField(
            model_name='recipe',
            name='category',
            field=models.ManyToManyField(blank=True, to='recipe.recipecategory', verbose_name='Food categories'),
        ),
        migrations.AddField(
            model_name='recipe',
            name='image',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='image_library.image'),
        ),
        migrations.AddField(
            model_name='recipe',
            name='ingredients',
            field=models.ManyToManyField(blank=True, to='recipe.recipeingredient', verbose_name='Food ingredients'),
        ),
        migrations.AddField(
            model_name='recipe',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_recipes', to=settings.AUTH_USER_MODEL, verbose_name='User recipe creator'),
        ),
        migrations.AddField(
            model_name='recipe',
            name='saved_by',
            field=models.ManyToManyField(blank=True, related_name='saved_recipes', to=settings.AUTH_USER_MODEL, verbose_name='User saved recipes'),
        ),
        migrations.AddField(
            model_name='food',
            name='allergens',
            field=models.ManyToManyField(blank=True, to='recipe.foodallergen'),
        ),
    ]
