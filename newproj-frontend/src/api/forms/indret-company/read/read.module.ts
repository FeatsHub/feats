/* tslint:disable:max-line-length */

import {NgModule} from '@angular/core';

import {IndretCompanyService} from '../../../controllers/IndretCompany';
import {FormsSharedModule} from '../../forms-shared.module';
import {IndretCompanyReadFormService} from './read.service';


@NgModule({
  imports: [
    FormsSharedModule,
  ],
  providers: [
    IndretCompanyService,
    IndretCompanyReadFormService,
  ],
})
export class IndretCompanyReadModule {}
