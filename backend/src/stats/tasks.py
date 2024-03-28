import logging
from main.celery import app
from utils.tasks_utils import ResilientTask

logger = logging.getLogger(__name__)

@app.task(bind=True, base=ResilientTask)
def save_system_stats():
    from stats.models import Stats
    from user.models import User
    from food.models import Recipe

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
