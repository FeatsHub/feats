import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/api/models';
import { RecipeService } from 'src/api/services';

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
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    ingredients: [],
    name: '',
    time: 0,
    owner: -1,
    saved_by: []
  }

  saved = false

  constructor(
    private _loadingCtrl: LoadingController,
    private _recipeService: RecipeService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _alertController: AlertController,
  ) {}

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
        this._recipeService.recipeRetrieve$Response({id: params['id'], expand: '~all'}).subscribe({
          next: (recipe) => {
            this.recipe = recipe.body;
            let userId = localStorage.getItem('userId')
            if (userId){
              this.saved = this.recipe.saved_by.includes(Number(userId))
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
                this._router.navigate(['/plates']);
              }
            });
          },
        },
      ]
    });

    await _alert.present();
  }

  saveRecipe(recipe: number){
    this._recipeService.recipeSaveCreate$Json$Response({id: recipe}).subscribe({
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

}
