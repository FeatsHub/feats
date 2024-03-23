import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
  isDefaultList = false
  loaded = false

  constructor(
    private _recipeListService: RecipeListService,
    private _route: ActivatedRoute,
    private _alertController: AlertController,
    private _router: Router
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
        this.isDefaultList = recipeList.body.is_default_list!
        this.listName = recipeList.body.name
        this.recipes = recipeList.body.recipes_data!
        this.loaded = true
      },
      error: (e) => {
      },
      complete: () => {
      }
    })
  }

  refresh(e: any){
    this.recipes = []
    this.loaded = false
    setTimeout(() => {
      // Any calls to load data go here
      this.getRecipeList();
      e.target.complete();
    }, 500);
  }

  async presentDeleteAlert() {
    const _alert = await this._alertController.create({
      header: 'Delete Alert',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Sí',
          role: 'confirm',
          handler: () => {
            this._recipeListService.recipeListDestroy$Response({id: this.recipeListId}).subscribe({
              next: (response) => {
              },
              error: (e) => console.error(e),
              complete: () => {
                this._router.navigate(['/profile']);
              }
            });
          },
        },
      ]
    });

    await _alert.present();
  }
}
