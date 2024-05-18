import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe, RoleEnum, User } from 'src/api/models';
import { RecipeListService, RecipeService, UserService } from 'src/api/services';
import { RecipeList } from 'src/api/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-recipes',
  templateUrl: 'profile-recipes.component.html',
  styleUrls: ['profile-recipes.component.scss']
})
export class ProfileRecipesComponent implements OnInit {

  @Input({required: true}) is_public: boolean;
  @Input({required: true}) owner: number;
  loaded: boolean = false;
  refreshing: boolean = false;

  recipes: Recipe[] = []

  constructor (
    private _recipeService: RecipeService,
  ) {
  }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(event: any = undefined){
    this._recipeService.recipeList$Response(
      {
        expand: '~all,creator.~all',
        owner: this.owner,
        is_public: this.is_public,
        limit: 5,
        offset: this.refreshing ? 0 : this.recipes.length
      }
    ).subscribe(
      {
        next: (response) => {
          if (!this.refreshing){
            this.recipes =  [...this.recipes, ...response.body.results!];
          }else{
            this.recipes = response.body.results!;
          }
        },
        error: (e) => {},
        complete: () => {
          event?.target.complete();

          // Recipes already loaded
          this.loaded = true;

          // End of refreshing if it was
          if (this.refreshing){
            this.refreshing = false;
          }
        }
      }
    );
  }

  handleInfiniteScroll(event: any){
    this.getRecipes();
  }

  handleRefresh(e: any){
    this.refreshing = true;
    this.loaded = false;
    this.getRecipes(e);
  }

}
