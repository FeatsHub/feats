import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Food, Recipe, RecipeCategory, RecipeIngredient, RecipeStep } from 'src/api/models';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FoodService, RecipeCategoryService, RecipeService } from 'src/api/services';
import { Image } from 'src/api/models';
import { ImageLibraryService } from 'src/api/services';
import { LoadingController } from '@ionic/angular';
import { ImageGenerator } from 'src/app/utils/functions';
import { RecipeCategoryList } from '../recipe-category-list/recipe-category-list.component';

@Component({
  selector: 'app-recipe-form',
  templateUrl: 'recipe-form.page.html',
  styleUrls: ['recipe-form.page.scss']
})
export class RecipeFormPage implements OnInit{

  recipeForm: FormGroup
  recipeImageForm: FormGroup
  routeSub: Subscription
  selectedImage = ''
  recipeId = -1
  searchedFoods: Food[] = []
  productName = ''
  navigationExtras: NavigationExtras

  showSearch = false

  currentRecipeCategories: RecipeCategory[] = []
  @ViewChild('recipeCategoryList') recipeCategoryListComponent: RecipeCategoryList

  constructor(
    private _loadingCtrl: LoadingController,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _recipeService: RecipeService,
    private _recipeCategoryService: RecipeCategoryService,
    private _imageLibraryService: ImageLibraryService,
    private _productService: FoodService
  ) {
    this.selectedImage = ImageGenerator.getRandomRecipeImage()
  }

  async ngOnInit() {
    // 🚩 Iniciate forms
    this.recipeForm = this._formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      diners: new FormControl('', Validators.min(1)),
      time: new FormControl('', Validators.min(1)),
      image: new FormControl(''),
      category: new FormControl(new FormArray([])),
      ingredients: this._formBuilder.array<RecipeIngredient>([]),
      steps: this._formBuilder.array<RecipeStep>([]),
    });
    this.recipeImageForm = this._formBuilder.group({
      image: [''],
    });
    const loading = await this._loadingCtrl.create({
      message: 'Loading...',
      duration: 4000,
    });
    loading.present();


    // Set focus on searchbar
    const modal = document.querySelector('ion-modal')!;
    modal.addEventListener('didPresent', () => {
      const search = modal.querySelector('ion-searchbar')!;
      search.setFocus();
    });

    // 🚩 Take id from url
    this.routeSub = this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        this.recipeId = params['id']
        this.navigationExtras = {
          state: {
            isCreation: false
          }
        };
        this._recipeService.recipeRetrieve({id: params['id'], expand: '~all'}).subscribe({
            next: (recipe) => {
              this.currentRecipeCategories = recipe.category_data
              this.recipeForm.patchValue(recipe);
              this.selectedImage = recipe.image_data.image!;
            },
            error: (e) => {
              console.error(e)
              loading.dismiss();
            },
            complete: () => {
              loading.dismiss();
            }
          }
        )
      }else {
        this.navigationExtras = {
          state: {
            isCreation: true
          }
        };
      }
    });
    loading.dismiss();
  }

  imageSelected(image: any){
    this.recipeImageForm.patchValue({
      image: image
    });
    this._imageLibraryService.imageLibraryCreate$Response({
        body: this.recipeImageForm.value as Image
      }).subscribe({
        next: (response) => {
          this.recipeForm.patchValue({
            image: response.body.id
          });
          this.selectedImage = response.body.image!
        },
        error: (e) =>
        console.error(e),
        complete: () => {
        }
      });
  }

  async submit(){
    this.recipeForm.patchValue({category: this.currentRecipeCategories.map(item => item.id)})
    const recipe = this.recipeForm.value as Recipe
    if (this.recipeId != -1){
      this._recipeService.recipePartialUpdate$Json$Response({body: recipe, id:this.recipeId}).subscribe({
        next: (response) => {
        },
        error: (e) => 
        console.error(e),
        complete: () => {
          this._router.navigate([`/recipes/${this.recipeId}`]);
        }
      });
    }else{
      this._recipeService.recipeCreate$Json$Response({body: recipe}).subscribe({
        next: (response) => {
            this._router.navigate(['/recipes/'+ response.body.id +'/edit/ingredients'], this.navigationExtras);
        },
        error: (e) => 
        console.error(e),
        complete: () => {

        }
      });
    }
  }

  openCatagoryModal(){
    this.showSearch = true
  }

  closeSearch(){
    this.showSearch = false
  }

  searchFocus(){

  }

  handleCategorySearch(e: any){
    const query = e.target.value.toLowerCase();
    this.recipeCategoryListComponent.handleCategorySearch(e);
  }

  deleteCategory(category: RecipeCategory){
    let position = this.currentRecipeCategories.indexOf(category)
    this.currentRecipeCategories.splice(position, 1)
    //this.recipeForm.patchValue({category: this.currentRecipeCategories})
  }

}
