from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    def create(self, username, password, email, **extra_fields):
        from recipe.models import RecipeList

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        
        # Create default list
        RecipeList.objects.create(**{
            'is_default_list': True,
            'owner': user,
            'name': 'Saved',
        })

        return user

    def create_superuser(self, username, email, password):
        user = self.create(
            email=self.normalize_email(email),
            username=username,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
