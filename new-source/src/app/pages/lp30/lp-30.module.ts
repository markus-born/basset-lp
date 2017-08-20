import { NgModule }             from '@angular/core';

import { LP30BaseComponent }    from './lp-30-base.component';
import { BassetSharedModule }   from '../../shared/shared.module';
import { InfoFormModule }       from '../../components/infoForm/info-form.module';

@NgModule({
    imports: [
      BassetSharedModule,
      InfoFormModule
    ],
    exports: [

    ],
    declarations: [
      LP30BaseComponent,

    ],
    providers: [],
})
export class Lp30BaseModule { }
