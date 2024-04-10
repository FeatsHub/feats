import { Component, OnInit } from '@angular/core';
import { Food, Recipe, RecipeIngredient } from 'src/api/models';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FoodService, RecipeService } from 'src/api/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingredients-form',
  templateUrl: 'ingredients-form.page.html',
  styleUrls: ['ingredients-form.page.scss']
})
export class IngredientsFormPage implements OnInit{

  searchedFoods: Food[] = []
  showSearch = false
  recipe: Recipe
  ingredients: RecipeIngredient[]

  constructor(
    private _formBuilder: FormBuilder,
    private _foodService: FoodService,
    private _recipeService: RecipeService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  async ngOnInit() {
    // Set focus on searchbar
    const modal = document.querySelector('ion-modal')!;
    modal.addEventListener('didPresent', () => {
      const search = modal.querySelector('ion-searchbar')!;
      search.setFocus();
    });

    this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        this._recipeService.recipeRetrieve$Response(
          {
            id: params['id'],
            expand: '~all',
          }
        ).subscribe(
          {
            next: (response) => {
              this.recipe = response.body!
              this.ingredients = this.recipe.ingredients;
            }
          }
        )
      }
    })
  this.getFoodList();
  }

  getFoodList(
    text: string | undefined = undefined
  ){
    this._foodService.foodList$Response(
      {
        search: text,
        limit: 15
      }
    ).subscribe(
      {
        next: (response) => {
          this.searchedFoods = response.body.results!;
        }
      }
    )
  }

  handleSearch(event: any){
    const query = event.target.value.toLowerCase();
    this.getFoodList(query);
  }

  searchFocus(){
    this.getFoodList()
    this.showSearch = true
  }

  closeSearch(){
    this.showSearch = false
  }

  deleteFood(food: RecipeIngredient, index: number){
    this.recipe.ingredients.splice(index, 1)
  }

  selectFood(food: Food){
    console.log(food)
    this.recipe.ingredients.push({
      id: -1,
      food: food.id,
      food_name: food.name,
      quantity: 0,
      unit: '',
    });
    this.closeSearch()
  }

  submit(){
    this.recipe.ingredients = this.ingredients;
    this._recipeService.recipePartialUpdate$Json$Response(
      {
        id: this.recipe.id,
        body: this.recipe
      }
    ).subscribe(
      {
        complete: () => {
          this._router.navigate(['/recipes', this.recipe.id, 'edit', 'steps'])
        }
      }
    )
  }

}
