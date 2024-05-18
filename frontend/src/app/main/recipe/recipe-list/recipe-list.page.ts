import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Recipe, RecipeCategory } from 'src/api/models';
import { RecipeCategoryService, RecipeService } from 'src/api/services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.page.html',
  styleUrls: ['recipe-list.page.scss']
})
export class RecipeListPage implements OnInit {

  userId = Number(localStorage.getItem('userId'))

  recipeCategories: RecipeCategory[] = []
  categoriesLoaded = false

  recipes: Recipe[] = []
  loaded = false

  selectedCategory: number[] = []
  searchedText: string | undefined

  limit = 5
  showSearch = false

  constructor(
    private _recipeCategoryService: RecipeCategoryService,
    private _recipeService: RecipeService
  ) {}

  async ngOnInit(){
    // Set focus on searchbar when modal searcg present
    const modal = document.querySelector('ion-modal')!;
    modal.addEventListener('didPresent', () => {
      const search = modal.querySelector('ion-searchbar')!;
      search.setFocus();
    });
  }

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

  async getRecipes(){
    this._recipeService.recipeList(
      {
        expand: '~all,creator.~all',
        category: this.selectedCategory,
        search: this.searchedText,
        offset: this.recipes.length,
        limit: this.limit
      }
    ).subscribe(
      {
        next: (recipes) => {
          this.recipes =  [...this.recipes, ...recipes.results!]
        },
        error: (e) => console.error(e),
        complete: () => {
          this.loaded = true;
        }
      }
    );
  }

  refresh(e: any){
    this.loaded = false
    this.recipes = []
    setTimeout(() => {
      // Any calls to load data go here
      this.getRecipes();
      //this.getRecipes(undefined, this.searchedText);
      e.target.complete();
    }, 500);
  }

  handleInfiniteScroll(event: any){
    this.getRecipes();
  }

  // 🔎 SEARCH
  handleSearch(event: any){
    this.searchedText = event.target.value.toLowerCase();
  }

  searchFocus(){
    this.showSearch = true
  }

  closeSearch(){
    this.showSearch = false
  }

  forceCloseSearch(){
    this.showSearch = false
    document.getElementById('search-modal')?.remove()
  }

  // ✨ CATEGORIES
  selectCategory(categoryId: number){
    // If element exists remove it from list, else add it
    if (this.selectedCategory.includes(categoryId)){
      const position = this.selectedCategory.indexOf(categoryId);
      this.selectedCategory.splice(position, 1);
    }else{
      this.selectedCategory.push(categoryId);
    }

    // Get filtered recipes
    this.recipes = [];
    this.getRecipes();
  }

}
