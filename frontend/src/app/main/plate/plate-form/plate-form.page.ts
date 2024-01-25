import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Subscription } from 'rxjs';
import { Recipe, RecipeCategory, RecipeImage } from 'src/api/models';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { RecipeCategoryService, RecipeImageService, RecipeService } from 'src/api/services';
import { LoadingController } from '@ionic/angular';
import { base64toBlob } from 'src/app/utils/functions';

@Component({
  selector: 'app-plate-edit',
  templateUrl: 'plate-form.page.html',
  styleUrls: ['plate-form.page.scss']
})
export class PlateFormPage implements OnInit{

  recipeForm: FormGroup;
  recipeImageForm: FormGroup;
  routeSub: Subscription;
  selectedImage = '';
  recipeCategories: RecipeCategory[];

  constructor(
    private _loadingCtrl: LoadingController,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _recipeService: RecipeService,
    private _recipeCategoryService: RecipeCategoryService,
    private _recipeImageService: RecipeImageService
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
        this._recipeService.recipeRetrieve({id: params['id']}).subscribe({
            next: (recipe) => {
              // Add data to form
              this.recipeForm.patchValue(recipe);
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

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos
    });
    this.recipeImageForm.patchValue({
      image: base64toBlob(image.dataUrl!)
    });
    this.selectedImage = image.dataUrl!
    this._recipeImageService.recipeImageCreate$FormData$Response({
      body: this.recipeImageForm.value as RecipeImage
    }).subscribe({
      next: (response) => {
        console.log(response)
        this.recipeForm.patchValue({
          image: response.body.id
        });
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
    this._recipeService.recipeCreate$Json$Response({body: recipe}).subscribe({
      next: (response) => {
      },
      error: (e) => 
      console.error(e),
      complete: () => {
        loading.dismiss();
        this._router.navigate(['/plates']);
      }
    });
  }
}
