import logging
from main.celery import app

logger = logging.getLogger(__name__)

@app.task(bind=True)
def save_system_stats(self):
    from stats.models import Stats
    from user.models import User
    from recipe.models import Recipe

    user_number = User.objects.all().count()

    total_recipe_number = Recipe.objects.all().count()

    public_recipe_number = Recipe.objects.filter(is_public=True).count()

    private_recipe_number = Recipe.objects.filter(is_public=False).count()

    stats_data = {
        'user_number': user_number,
        'total_recipe_number': total_recipe_number,
        'public_recipe_number': public_recipe_number,
        'private_recipe_number': private_recipe_number
    }

    stat = Stats.objects.create(**stats_data)

    logger.info(f'Stats saved at {stat.created}')
