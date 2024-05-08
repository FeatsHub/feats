import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Recipe } from 'src/api/models';
import { ImageGenerator } from 'src/app/utils/functions';

@Component({
  selector: 'app-recipe-table',
  templateUrl: 'recipe-table.component.html',
  styleUrls: ['recipe-table.component.scss']
})
export class RecipeTablePage implements OnInit {

  @Input() recipes: Recipe[] = []
  @Input() loaded = false
  @Input() noGoRecipe = false
  @Output() infiniteScroll = new EventEmitter();
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  randomImage = ImageGenerator.getRandomRecipeImage()

  constructor(
    private _router: Router
  ) {}

  ngOnInit(){}

  onIonInfinite(e: any){
    this.infiniteScroll.emit()
    setTimeout(() => {
      (e as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  goRecipe(recipe: Recipe){
    if (!this.noGoRecipe){
      this.closeModal.emit(true)
      this._router.navigate(['/recipes/', recipe.id])
    }else{
      this.recipeSelected.emit(recipe)
    }
    
  }

  goCreator(creatorId: number){
    this.closeModal.emit(true)
    this._router.navigate(['/profile/', creatorId])
  }

  getRandomRecipeImage(){
    return ImageGenerator.getRandomRecipeImage()
  }

}
