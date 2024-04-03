# Generated by Django 4.2.3 on 2024-04-03 15:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0001_initial'),
        ('user', '0002_usersettings'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserPreferences',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('use_dark_mode', models.BooleanField(null=True)),
                ('allergens', models.ManyToManyField(blank=True, to='recipe.foodallergen')),
            ],
        ),
        migrations.DeleteModel(
            name='UserSettings',
        ),
        migrations.AddField(
            model_name='user',
            name='preferences',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='user.userpreferences'),
        ),
    ]
