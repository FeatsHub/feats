import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AllergenChecksComponent } from './allergen-list.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [
    AllergenChecksComponent
  ],
  exports: [
    AllergenChecksComponent
  ]
})
export class AllergensListModule {}
