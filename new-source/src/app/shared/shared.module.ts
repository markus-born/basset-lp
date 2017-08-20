import { NgModule }                           from '@angular/core';
import { CommonModule }                       from '@angular/common';
// import { ViewportModule }                     from 'angular2-viewport';
import {
  FormsModule,
  ReactiveFormsModule}                        from '@angular/forms';
import { BrowserAnimationsModule }            from '@angular/platform-browser/animations';

import { BassetHeaderComponent }              from '../components/header/header.component';
import { BgFooterComponent }                  from '../components/footer/footer.component';
import { YellowBtnComponent }                 from '../components/yellow-btn/yellow-btn.component';
import { BlockHalfBulletsComponent }          from '../components/block-half-bullets/block-half-bullets.component';
import { BlockTestimonialComponent }          from '../components/block-testimonial/block-testimonial.component';
import { BlockCenteredTextComponent }         from '../components/block-centered-text/block-centered-text.component';
import { BlockCenteredBulletsComponent }      from '../components/block-centered-bullets/block-centered-bullets.component';

import { TelephonifyPipe }         from './telephonify.pipe';

const importExportDeclarationArray = [
  BgFooterComponent,
  BassetHeaderComponent,
  YellowBtnComponent,
  BlockHalfBulletsComponent,
  BlockTestimonialComponent,
  BlockCenteredTextComponent,
  BlockCenteredBulletsComponent
];

@NgModule({
  imports:      [
    CommonModule,
    // ViewportModule,
    BrowserAnimationsModule
  ],
  declarations: [ 
    ...importExportDeclarationArray,
    TelephonifyPipe
  ],
  exports:      [ ...importExportDeclarationArray,
    TelephonifyPipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ]
})
export class BassetSharedModule {

}

