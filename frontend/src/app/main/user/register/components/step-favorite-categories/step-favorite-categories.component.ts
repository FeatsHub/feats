import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeCategory } from 'src/api/models';

@Component({
  selector: 'app-favorite-categories',
  templateUrl: './step-favorite-categories.component.html',
  styleUrls: ['./step-favorite-categories.component.scss'],
})
export class StepFavoriteCategoriesComponent  implements OnInit {

  @Output() step = new EventEmitter<string>();
  @Input() favoriteCategories: RecipeCategory[] = []

  constructor() {
  }

  ngOnInit() {}

}
