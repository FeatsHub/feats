import { Component, OnInit, HostListener, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Recipe, RecipeCategory } from 'src/api/models';
import { RecipeCategoryService, RecipeService } from 'src/api/services';

@Component({
  selector: 'app-recipe-category-list',
  templateUrl: 'recipe-category-list.component.html',
  styleUrls: ['recipe-category-list.component.scss']
})
export class RecipeCategoryList implements OnInit {

  categories: RecipeCategory[] = []
  @Input() categoryLimit: number = 3
  @Input() selectedCategories: RecipeCategory[] = []
  @Output() selectedCategoriesChange: EventEmitter<RecipeCategory[]> = new EventEmitter<RecipeCategory[]>();

  searchedText = ''
  showNoMoreCategoryText = false

  constructor(
    private _recipeCategoryService: RecipeCategoryService
  ) {}

  ngOnInit(){
    // 🚩 Obtaining recipe list
    this.getCategories();
  }

  getCategories(searchedText: string | undefined = undefined){
    this._recipeCategoryService.recipeCategoryList(
      {
        search: searchedText
      }
    ).subscribe({
      next: (recipeCategories) => {
        if (recipeCategories.results != undefined){
          this.categories = recipeCategories.results;
        }
      },
      error: (e) => console.error(e),
      complete: () => {
      }
    });
  }

  createCategory(){
    this._recipeCategoryService.recipeCategoryCreate$Json$Response(
      {
        body: {
          id: -1,
          name: this.searchedText
        }
      }
    ).subscribe({
      next: (response) => {
        this.selectCategory(response.body);
      },
      error: (e) => console.error(e),
    });
  }

  selectCategory(category: RecipeCategory){
    if (!this.hasCategory(category)){
      if (this.selectedCategories.length < this.categoryLimit){
        this.selectedCategories.push(category)
        //
        this.showNoMoreCategoryText = false;
      }
      else{
        this.showNoMoreCategoryText = true;
      }
    }else{
      //this.deleteCategory(category)
      this.showNoMoreCategoryText = false;
    }
    this.selectedCategoriesChange.emit(this.selectedCategories);
  }

  hasCategory(category: RecipeCategory){
    return this.selectedCategories.find(item => JSON.stringify(item) === JSON.stringify(category)) !== undefined;
  }

  handleCategorySearch(e: any){
    const query = e.target.value.toLowerCase();
    this.getCategories(query);
    this.searchedText = query;
  }
}
