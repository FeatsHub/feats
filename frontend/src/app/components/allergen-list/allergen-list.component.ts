import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FoodAllergen } from 'src/api/models';
import { FoodAllergenService } from 'src/api/services';

@Component({
  selector: 'app-allergens-check',
  templateUrl: './allergen-list.component.html',
  styleUrls: ['./allergen-list.component.scss'],
})
export class AllergenChecksComponent  implements OnInit {

  allergens: FoodAllergen[]
  @Input() allergensSelected: number[]
  @Output() allergensSelectedChange: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor(
    private _allergenService: FoodAllergenService
  ) { }

  ngOnInit() {
    this._allergenService.foodAllergenList$Response().subscribe(
      {
        next: (response) => {
          this.allergens = response.body.results!
        },
        error: (e) =>{

        },
        complete: () => {

        }
      }
    )
  }

  allergenInList(allergenId: number){
    return this.allergensSelected.some(allergen => allergen === allergenId);
  }

  toggleSelect(allergenId: number){
    if (this.allergenInList(allergenId)){
      const index = this.allergensSelected.indexOf(allergenId);
      this.allergensSelected.splice(index, 1);
    }else{
      this.allergensSelected.push(allergenId);
    }
  }

}
