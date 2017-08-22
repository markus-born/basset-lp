import { NgModule }             from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './lp-30.route';
import { LP30BaseComponent }    from './lp-30-base.component';
import { BassetSharedModule }   from '../../shared/shared.module';
import { InfoFormModule }       from '../../components/infoForm/info-form.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      routing,
      BassetSharedModule,
      InfoFormModule
    ],
    exports: [
      LP30BaseComponent,
      CommonModule,
      FormsModule,
      BassetSharedModule,
      InfoFormModule
    ],
    declarations: [
      LP30BaseComponent
    ],
    providers: []
})
export class Lp30BaseModule { }
