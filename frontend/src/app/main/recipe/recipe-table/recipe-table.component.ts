import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Recipe } from 'src/api/models';

@Component({
  selector: 'app-recipe-table',
  templateUrl: 'recipe-table.component.html',
  styleUrls: ['recipe-table.component.scss']
})
export class RecipeTablePage implements OnInit {

  @Input() recipes: Recipe[] = []
  @Input() loaded = false
  @Output() infiniteScroll = new EventEmitter();

  constructor() {}

  ngOnInit(){}

  onIonInfinite(e: any){
    this.infiniteScroll.emit()
    setTimeout(() => {
      (e as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
