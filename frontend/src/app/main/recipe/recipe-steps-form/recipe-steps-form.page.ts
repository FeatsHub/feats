import { Component, OnInit, ViewChild } from '@angular/core';
import { Food, Recipe, RecipeIngredient, RecipeStep } from 'src/api/models';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FoodService, RecipeService, RecipeStepService } from 'src/api/services';
import { ActivatedRoute, Router } from '@angular/router';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-recipe-step-form',
  templateUrl: 'recipe-steps-form.page.html',
  styleUrls: ['recipe-steps-form.page.scss']
})
export class StepFormPage implements OnInit{

  recipe: Recipe
  steps: RecipeStep[]
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;

  constructor(
    private _recipeService: RecipeService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  async ngOnInit() {
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
              this.steps = this.recipe.steps;
            }
          }
        )
      }
    })
  }


  deleteStep(step: RecipeStep, index: number){
    this.recipe.steps.splice(index, 1)
  }

  submit(){
    //this.recipe.steps = this.steps;
    this._recipeService.recipePartialUpdate$Json$Response(
      {
        id: this.recipe.id,
        body: this.recipe
      }
    ).subscribe(
      {
        complete: () => {
          this._router.navigate(['/recipes'])
        }
      }
    )
  }

  addStep() {
    this.steps.sort((a, b) => a.number - b.number);

    let nextStepNumber = this.steps.length > 0 ? this.steps[this.steps.length - 1].number + 1 : 1;

    this.steps.push({
        id: -1,
        number: nextStepNumber,
        description: '',
        recipe: this.recipe.id,
        related_recipes: [],
        related_recipes_data: undefined
    });
    let mappedStepNumbers = this.steps.map(step => step.number.toString());
    this.accordionGroup.value = mappedStepNumbers;
  }

}
