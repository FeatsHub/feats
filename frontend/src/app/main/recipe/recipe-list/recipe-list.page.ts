import { Component, OnInit, HostListener } from '@angular/core';
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
  userId = Number(localStorage.getItem('userId'))
  private clickTimer: any;

  constructor(
    private _recipeCategoryService: RecipeCategoryService,
    private _recipeService: RecipeService
  ) {}

  async ionViewWillEnter() {
    // 🚩 Obtaining recipeCategory list
    this._recipeCategoryService.recipeCategoryList().subscribe({
      next: (recipeCategories) => {
        this.recipeCategories = recipeCategories.results!
        this.categoriesLoaded = true
      },
      error: (e) => console.error(e),
      complete: () => {
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

  saveRecipe(recipeId: number){
    this._recipeService.recipeSaveCreate$Json$Response({id: recipeId, expand: '~all'}).subscribe({
      next: (response) => {
        //Update selected recipe saved_by list
        const updated_recipe = response.body
        this.recipes = this.recipes.map((recipe) =>
          recipe.id === recipeId ? { ...recipe, saved_by: updated_recipe.saved_by } : recipe
        ) as Recipe[];
      },
      error: (e) => console.error(e),
      complete: () => {
      }
    });
  }

  refresh(e: any){
    this.loaded = false
    this.recipes = []
    setTimeout(() => {
      // Any calls to load data go here
      this.getRecipes();
      e.target.complete();
    }, 500);
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    //alert('a')
    this.clickTimer = setTimeout(() => {
      this.realizarClicLargo();
    }, 50); // Ajusta el tiempo según tus necesidades
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    //alert('b')
    clearTimeout(this.clickTimer);
  }

  realizarClicLargo() {
    //alert('c')
    console.log('Clic largo detectado');
    // Aquí puedes realizar las acciones que deseas para el clic largo
  }
}
