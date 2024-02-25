import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { RouterModule } from '@angular/router';
import { ProfileRetrievePage } from './profile-retrieve/profile-retrieve.page';
import { ProfileFormPage } from './profile-form/profile-form.page';
import { ImagePickerModule } from 'src/app/components/image-picker/image-picker.module';

@NgModule({
  imports: [
    RouterModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    ImagePickerModule
  ],
  declarations: [
    ProfileRetrievePage,
    ProfileFormPage,
  ]
})
export class ProfileModule {}
