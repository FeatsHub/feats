import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Recipe, RecipeList } from 'src/api/models';
import { RecipeListService, RecipeService } from 'src/api/services';
import { ImageGenerator } from 'src/app/utils/functions';

@Component({
  selector: 'app-recipe-retrieve',
  templateUrl: 'recipe-retrieve.page.html',
  styleUrls: ['recipe-retrieve.page.scss']
})
export class RecipeDetailPage implements OnInit {

  routeSub: Subscription
  recipe: Recipe = {
    category: [],
    category_data: [],
    description: 'string',
    diners: 0,
    id: 0,
    image: 0,
    image_data: {
      id: 0,
      image: ImageGenerator.getRandomRecipeImage()
    },
    ingredients: [],
    name: '',
    time: 0,
    owner: -1,
    saved_by: [],
    allergens: '',
    creator: {
      id: -1,
      image: {
        id: -1,
        image: ''
      },
      username: ''
    },
    steps: []
  }

  saved = false
  isPublic = false
  isIngredientSegment = true
  shortDescription: string = '';
  showDescription: boolean = false;

  showSavedListsModal = false
  recipeLists: RecipeList[]

  constructor(
    private _loadingCtrl: LoadingController,
    private _recipeService: RecipeService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _alertController: AlertController,
    private _toastCtrl: ToastController,
    private _recipeListService: RecipeListService
  ) {
  }

  async ngOnInit() {
    const loading = await this._loadingCtrl.create({
      message: 'Loading...',
      duration: 4000,
    });
    loading.present();
    // 🚩 Take id from url
    this.routeSub = this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        this._recipeService.recipeRetrieve$Response({id: params['id'], expand: '~all,creator.~all,steps.related_recipes_data.~all,'}).subscribe({
          next: (recipe) => {
            this.recipe = recipe.body;
            this.shortDescription = `${this.recipe.description.slice(0, 75)}...`;
            let userId = localStorage.getItem('userId')
            if (userId){
              this.saved = this.recipe.saved_by.includes(Number(userId))
            }
            if (this.recipe.image_data == null){
              this.recipe.image_data = {
                image: ImageGenerator.getRandomRecipeImage(),
                id: -1
              }
            }
          },
          error: (e) => console.error(e),
          complete: () => {
            loading.dismiss();
          }
        });
      }
    })
  }

  async presentDeleteAlert() {
    const _alert = await this._alertController.create({
      header: 'Delete Alert',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Sí',
          role: 'confirm',
          handler: () => {
            this._recipeService.recipeDestroy$Response({id: this.recipe.id}).subscribe({
              next: (response) => {
              },
              error: (e) => console.error(e),
              complete: () => {
                this._router.navigate(['/recipes']);
              }
            });
          },
        },
      ]
    });

    await _alert.present();
  }

  changeListEvent(ev: any) {
    const { role } = ev.detail;
    console.log(`Dismissed with role: ${role}`);
  }

  saveRecipe(recipe: number, listId: string | undefined = undefined){
    this._recipeService.recipeSaveCreate$Json$Response({id: recipe, list_id: listId}).subscribe({
      next: (response) => {
        let userId = localStorage.getItem('userId')
        if (userId){
          this.saved = response.body.saved_by.includes(Number(userId))
        }
      },
      error: (e) => console.error(e),
      complete: () => {
      }
    });
  }

  closeSearch(){
    this.showSavedListsModal = false
  }

  async showSaveToast(){
    if (!this.saved){
      this.saved = true;
      await this._toastCtrl.create({
        message: "Receta guardada",
        duration: 2000,
        position: 'bottom',
        buttons: [{
          text: 'Cambiar lista...',
          handler: () => {
            this.openSavedListsModal()
          }
        }]
      }).then(res => {
        res.present()
        res.onDidDismiss().then(() => {
          console.log('Toast cerrado');
          if (!this.showSavedListsModal){
            this.saveRecipe(this.recipe.id);
          }
        });
      });
    }else{
      this.saveRecipe(this.recipe.id);
    }
  }

  openSavedListsModal(){
    this.getOwnLists()
    this.showSavedListsModal = true
  }

  getOwnLists(){
    this._recipeListService.recipeListList$Response(
      {
        expand: '~~all,recipes_data.~all',
        fields: 'id,name,is_default_list,recipes_data.image_data.image',
        owner: localStorage.getItem('userId') as unknown as number
      }
      ).subscribe({
      next: (response) => {
        this.recipeLists = response.body.results!
      },
      error: (e) => {
      },
      complete: () => {
      }
    });
  }

  get isOwner(){
    return localStorage.getItem('userId') == String(this.recipe.owner)
  }

  togglePublic(){
    this._recipeService.recipePartialUpdate$Json$Response(
      {body: {is_public: !this.recipe.is_public}, id: this.recipe.id, expand: '~all,creator.~all,steps.related_recipes_data.~all,'}).subscribe({
        next: (recipe) => {
          this.recipe = recipe.body;
        },
        error: (e) => console.error(e),
        complete: () => {
          console.log(this.recipe)
        }
    });
  }

  changeIngredientSegment(event: any){
    this.isIngredientSegment = event.detail.value == 'ingredient'
  }

  toggleFullDescription() {
    this.showDescription = !this.showDescription;
  }

  saveOnList(list: RecipeList){
    this.saveRecipe(this.recipe.id, String(list.id))
    this.showSavedListsModal = false
  }

  goCreator(){
    if (localStorage.getItem('userId')! == String(this.recipe.creator.id)){
      this._router.navigate(['/tabs', 'profile'])
    }else{
      this._router.navigate(['/profile/', this.recipe.creator.id])
    }
  }

}
