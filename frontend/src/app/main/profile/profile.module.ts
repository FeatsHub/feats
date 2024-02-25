import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ImagePickerComponent } from 'src/app/components/image-picker/image-picker.component';
import { RouterModule } from '@angular/router';
import { ProfileRetrievePage } from './profile-retrieve/profile-retrieve.page';
import { ProfileEditPage } from './profile-edit/profile-edit.page';

@NgModule({
  imports: [
    RouterModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProfileRetrievePage,
    ProfileEditPage
  ]
})
export class ProfileModule {}
