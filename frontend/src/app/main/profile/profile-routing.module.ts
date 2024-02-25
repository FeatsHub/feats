import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileRetrievePage } from './profile-retrieve/profile-retrieve.page';
import { ProfileEditPage } from './profile-edit/profile-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileRetrievePage,
  },
  {
      path: 'edit',
      component: ProfileEditPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
