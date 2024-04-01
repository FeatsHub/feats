import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    UserListComponent
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule {}
