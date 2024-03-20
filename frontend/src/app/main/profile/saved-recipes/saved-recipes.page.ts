import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe, RecipeCategory, RecipeList } from 'src/api/models';
import { RecipeCategoryService, RecipeListService, RecipeService } from 'src/api/services';

@Component({
  selector: 'app-saved-recipes-list',
  templateUrl: 'saved-recipes.page.html',
  styleUrls: ['saved-recipes.page.scss']
})
export class SavedRecipesPage implements OnInit {

  recipes: Recipe[] = []
  routeSub: Subscription
  recipeListId: number
  listName: string

  constructor(
    private _recipeListService: RecipeListService,
    private _route: ActivatedRoute,
  ) {}

  async ionViewWillEnter() {
    // 🚩 Obtaining recipe list
    this.routeSub = this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        this.recipeListId = params['id']
        this.getRecipeList();
      }
    });
  }

  ngOnInit(){}

  async getRecipeList(){
    this._recipeListService.recipeListRetrieve$Response({id: this.recipeListId, expand: '~all,recipes_data.~all'}).subscribe({
      next: (recipeList) => {
        this.listName = recipeList.body.name
        this.recipes = recipeList.body.recipes_data!
      },
      error: (e) => {
      },
      complete: () => {
      }
    })
  }

  refresh(e: any){
    this.recipes = []
    setTimeout(() => {
      // Any calls to load data go here
      this.getRecipeList();
      e.target.complete();
    }, 500);
  }
}
