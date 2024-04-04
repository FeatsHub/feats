"""
URL configuration for main project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, re_path
from rest_framework import routers
from user import views as user_views
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from recipe import views as recipe_views
from image_library import views as image_library_views
from stats import views as stats_views


# To register all the urls, add one for each view created
router = routers.DefaultRouter()

urlpatterns = [
    # Documentation and definition
    re_path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    re_path('api/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    re_path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]

# Image Library views
router.register(
    r'image_library',
    image_library_views.ImageView,
    basename='image_library'
)

# User views
router.register(
    r'user',
    user_views.UserView,
    basename='user'
)

# Food views
router.register(
    r'recipe',
    recipe_views.RecipeView,
    basename='recipe'
)

router.register(
    r'recipe_category',
    recipe_views.RecipeCategoryView,
    basename='recipe_category'
)

router.register(
    r'recipe_ingredient',
    recipe_views.RecipeIngredientView,
    basename='recipe_ingredient'
)

router.register(
    r'recipe_list',
    recipe_views.RecipeListView,
    basename='recipe_list'
)

router.register(
    r'food',
    recipe_views.FoodView,
    basename='food'
)

router.register(
    r'food_allergen',
    recipe_views.FoodAllergenView,
    basename='food_allergen'
)

router.register(
    r'system_stats',
    stats_views.StatsView,
    basename='system_stats'
)

urlpatterns += [
    re_path(r"^api/", include((router.urls, "current"), namespace="current")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)