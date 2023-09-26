/* tslint:disable:max-line-length */

import {NgModule} from '@angular/core';

import {IndretTitularService} from '../../../controllers/IndretTitular';
import {FormsSharedModule} from '../../forms-shared.module';
import {IndretTitularCreateFormService} from './create.service';


@NgModule({
  imports: [
    FormsSharedModule,
  ],
  providers: [
    IndretTitularService,
    IndretTitularCreateFormService,
  ],
})
export class IndretTitularCreateModule {}
