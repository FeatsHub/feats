import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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

}
