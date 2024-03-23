import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Recipe, RecipeCategory } from 'src/api/models';
import { RecipeCategoryService, RecipeService } from 'src/api/services';

@Component({
  selector: 'app-recipe-table',
  templateUrl: 'recipe-table.component.html',
  styleUrls: ['recipe-table.component.scss']
})
export class RecipeTablePage implements OnInit {

  @Input() recipes: Recipe[] = []
  @Input() loaded = false

  constructor() {}

  ngOnInit(){}

}
