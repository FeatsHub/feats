import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product, Recipe, RecipeCategory, RecipeImage } from 'src/api/models';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ProductService, RecipeCategoryService, RecipeImageService, RecipeService } from 'src/api/services';
import { LoadingController } from '@ionic/angular';

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

  constructor(
    private _loadingCtrl: LoadingController,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _recipeService: RecipeService,
    private _recipeCategoryService: RecipeCategoryService,
    private _recipeImageService: RecipeImageService,
    private _productService: ProductService
  ) {
    // 🚩 Iniciate forms
    this.recipeForm = this._formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      diners: new FormControl('', Validators.min(1)),
      time: new FormControl('', Validators.min(1)),
      image: new FormControl(''),
      category: new FormControl(new FormArray([]))
    });
    this.recipeImageForm = this._formBuilder.group({
      image: [''],
    });
  }

  searchedProducts: Product[] = []
  products: Product[] = []
  productName = ''

  async ngOnInit() {
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
        this._recipeService.recipeRetrieve({id: params['id'], expand: '~all'}).subscribe({
            next: (recipe) => {
              this.recipeForm.patchValue(recipe);
              this.selectedImage = recipe.image_data.image!;
            },
            error: (e) => console.error(e),
            complete: () => {
              loading.dismiss();
            }
          }
        )
      }
    });
    loading.dismiss();
  }

  imageSelected(image: any){
    this.recipeImageForm.patchValue({
      image: image
    });
    this._recipeImageService.recipeImageCreate$FormData$Response({
        body: this.recipeImageForm.value as RecipeImage
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
    const loading = await this._loadingCtrl.create({
      message: 'Saving...',
      duration: 4000,
    });
    loading.present();
    const recipe = this.recipeForm.value as Recipe
    if (this.recipeId != -1){
      this._recipeService.recipePartialUpdate$Json$Response({body: recipe, id:this.recipeId}).subscribe({
        next: (response) => {
        },
        error: (e) => 
        console.error(e),
        complete: () => {
          loading.dismiss();
          this._router.navigate(['/recipes/'+this.recipeId]);
        }
      });
    }else{
      this._recipeService.recipeCreate$Json$Response({body: recipe}).subscribe({
        next: (response) => {
        },
        error: (e) => 
        console.error(e),
        complete: () => {
          loading.dismiss();
          this._router.navigate(['/recipes']);
        }
      });
    }
  }

  handleSearch(event: any){
    const query = event.target.value.toLowerCase()
    this.productName = query
    if (query.length == 0){
      this.searchedProducts = []
      return
    }
    this._productService.productList$Response({search: query, limit: 3}).subscribe({
      next: (response) => {
        console.log(response.body.results!)
        this.searchedProducts = response.body.results!;
      },
      error: (e) => console.error(e),
      complete: () => {
      }
    });
  }

  createProduct(productName: string){
    this._productService.productCreate$Json$Response(
      {
        body: {
          id: undefined,
          name: productName
        }
      }
    ).subscribe({
      next: (response) => {
        this.products.push(response.body)
        this.searchedProducts = []
        this.productName = ''
      },
      error: (e) => console.error(e),
      complete: () => {
      }
    });
  }

  selectProduct(product: Product){
    this.products.push(product)
    this.searchedProducts = []
    this.productName = ''
  }

}
