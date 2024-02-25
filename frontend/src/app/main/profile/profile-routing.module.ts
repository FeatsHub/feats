import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileRetrievePage } from './profile-retrieve/profile-retrieve.page';
import { ProfileFormPage } from './profile-form/profile-form.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileRetrievePage,
  },
  {
      path: 'edit',
      component: ProfileFormPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
