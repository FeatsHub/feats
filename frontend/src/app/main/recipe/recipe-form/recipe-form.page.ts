import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Food, Recipe, RecipeCategory, RecipeIngredient, RecipeStep } from 'src/api/models';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FoodService, RecipeCategoryService, RecipeService } from 'src/api/services';
import { Image } from 'src/api/models';
import { ImageLibraryService } from 'src/api/services';
import { LoadingController } from '@ionic/angular';
import { ImageGenerator } from 'src/app/utils/functions';

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
  recipeCategories: RecipeCategory[]
  recipeId = -1
  searchedFoods: Food[] = []
  productName = ''
  navigationExtras: NavigationExtras

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

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
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

    // 🚩 Obtaining recipeCategory list
    this._recipeCategoryService.recipeCategoryList().subscribe({
      next: (recipeCategories) => {
        if (recipeCategories.results != undefined){
          this.recipeCategories = recipeCategories.results;
        }
      },
      error: (e) => console.error(e),
      complete: () => {
        loading.dismiss();
      }
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
              this.recipeForm.patchValue(recipe);
              recipe.ingredients.forEach( (item) => {
                this.ingredients.push(this._formBuilder.group({
                  food: [item.food],
                  food_name: [item.food_name],
                  quantity: [item.quantity],
                  unit: [item.unit],
                }));
              })
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
      }else{
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

  handleChangeCategorySelect(e: any){
    this.recipeForm.patchValue({category: e.detail.value});
  }

  async submit(){
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

  handleSearch(event: any){
    const query = event.target.value.toLowerCase()
    this.productName = query
    if (query.length == 0){
      this.searchedFoods = []
      return
    }
    this._productService.foodList$Response({search: query, limit: 3}).subscribe({
      next: (response) => {
        console.log(response.body.results!)
        this.searchedFoods = response.body.results!;
      },
      error: (e) => console.error(e),
      complete: () => {
      }
    });
  }

  createFood(productName: string){
    this._productService.foodCreate$Json$Response(
      {
        body: {
          id: -1,
          name: productName
        }
      }
    ).subscribe({
      next: (response) => {
        this.ingredients.push(this._formBuilder.group({
          food: [response.body.id!],
          food_name: [response.body.name],
          quantity: [0],
          unit: [''],
        }));
        this.searchedFoods = []
        this.productName = ''
      },
      error: (e) => console.error(e),
      complete: () => {
      }
    });
  }

  selectFood(product: Food){
    this.ingredients.push(this._formBuilder.group({
      food: [product.id],
      food_name: [product.name],
      quantity: [0],
      unit: [''],
    }));
    this.searchedFoods = []
    this.productName = ''
  }

}
