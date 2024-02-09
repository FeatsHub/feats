import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Recipe, RecipeCategory } from 'src/api/models';
import { RecipeCategoryService, RecipeService } from 'src/api/services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.page.html',
  styleUrls: ['recipe-list.page.scss']
})
export class RecipeListPage implements OnInit {

  recipeCategories: RecipeCategory[] = []
  recipes: Recipe[] = []
  selectedCategory: number | undefined = undefined
  search: string | undefined = undefined
  loaded = false
  categoriesLoaded = false

  constructor(
    private _loadingCtrl: LoadingController,
    private _recipeCategoryService: RecipeCategoryService,
    private _recipeService: RecipeService
  ) {}

  async ionViewWillEnter() {
    // 🚩 Show loading
    const loading = await this._loadingCtrl.create({
      message: 'Loading...',
      duration: 4000,
    });
    loading.present();
    // 🚩 Obtaining recipeCategory list
    this._recipeCategoryService.recipeCategoryList().subscribe({
      next: (recipeCategories) => {
        this.recipeCategories = recipeCategories.results!
        this.categoriesLoaded = true
      },
      error: (e) => console.error(e),
      complete: () => {
        loading.dismiss();
      }
    });

    // 🚩 Obtaining recipe list
    this.getRecipes();
  }

  ngOnInit(){}

  async getRecipes(
    selectedCategory: number[] | undefined = undefined,
    search: string | undefined = undefined
    ){
    this.loaded = false;
    const loading = await this._loadingCtrl.create({
      message: 'Loading...',
      duration: 4000,
    });
    loading.present();
    if (selectedCategory == this.selectedCategory){
      selectedCategory = undefined;
      this.selectedCategory = undefined;
    }

    this._recipeService.recipeList({expand: '~all', category: selectedCategory, search: search}).subscribe({
      next: (recipes) => {
        if (recipes.results != undefined){
          this.recipes = recipes.results;
        }
      },
      error: (e) => console.error(e),
      complete: () => {
        loading.dismiss();
        this.loaded = true;
      }
    });

    // Selection category
    if (selectedCategory != undefined){
      if (selectedCategory![0] == this.selectedCategory){
        this.selectedCategory = undefined;
      }else{
        this.selectedCategory = selectedCategory![0];
      }
    }

  }

  handleSearch(event: any){
    const query = event.target.value.toLowerCase();
    if (this.selectedCategory == undefined){
      this.getRecipes(undefined, query);
    }else{
      this.getRecipes([this.selectedCategory], query);
    }
  }

}
