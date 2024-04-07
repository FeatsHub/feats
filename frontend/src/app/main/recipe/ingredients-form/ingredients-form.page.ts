import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Food, Recipe, RecipeCategory, RecipeIngredient } from 'src/api/models';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FoodService, RecipeCategoryService, RecipeService } from 'src/api/services';
import { Image } from 'src/api/models';
import { ImageLibraryService } from 'src/api/services';
import { LoadingController } from '@ionic/angular';
import { ImageGenerator } from 'src/app/utils/functions';

@Component({
  selector: 'app-ingredients-form',
  templateUrl: 'ingredients-form.page.html',
  styleUrls: ['ingredients-form.page.scss']
})
export class IngredientsFormPage implements OnInit{

  //recipeForm: FormGroup
  searchedFoods: Food[] = []
  selectedFoods: Food[] = []
  showSearch = false

  constructor(
    private _formBuilder: FormBuilder,
    private _foodService: FoodService
  ) {
  }

  async ngOnInit() {}

  async submit(){
  }

  handleSearch(event: any){
    const query = event.target.value.toLowerCase()
  }

  searchFocus(){
    this.showSearch = true
  }

  closeSearch(){
    this.showSearch = false
  }

}
