import { NgModule }                           from '@angular/core';
import { CommonModule }                       from '@angular/common';
// import { ViewportModule }                     from 'angular2-viewport';
import {
  FormsModule,
  ReactiveFormsModule}                        from '@angular/forms';
//import { BrowserAnimationsModule }            from '@angular/platform-browser/animations';

import { ModalModule }                        from 'ngx-modal';

import { BassetHeaderComponent }              from '../components/header/header.component';
import { BgFooterComponent }                  from '../components/footer/footer.component';
import { YellowBtnComponent }                 from '../components/yellow-btn/yellow-btn.component';

import { BlockTestimonialComponent }          from '../components/block-testimonial/block-testimonial.component';
import { BlockCenteredTextComponent }         from '../components/block-centered-text/block-centered-text.component';

import { BlockBulletsComponent }              from '../components/block-bullets/block-bullets.component';

import { JoinModalComponent }                 from '../components/join-modal/join-modal.component';

import { TelephonifyPipe }         from './telephonify.pipe';

const importExportDeclarationArray = [
  BgFooterComponent,
  BassetHeaderComponent,
  YellowBtnComponent,
  BlockTestimonialComponent,
  BlockCenteredTextComponent,
  BlockBulletsComponent,
  JoinModalComponent
];

@NgModule({
  imports:      [
    CommonModule,
    // ViewportModule,
    //BrowserAnimationsModule,
    ModalModule
  ],
  declarations: [ 
    ...importExportDeclarationArray,
    TelephonifyPipe
  ],
  entryComponents: [
    JoinModalComponent
  ],
  exports:      [ ...importExportDeclarationArray,
    TelephonifyPipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //BrowserAnimationsModule

  ]
})
export class BassetSharedModule {

}

