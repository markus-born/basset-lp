import {
    Component,
    OnInit,
    Input}                    from '@angular/core';
import {
    FormGroup
}                             from '@angular/forms';
import { DomSanitizer }       from '@angular/platform-browser';
import { InfoFormBl }         from './info-form.bl';


@Component({
    selector: 'info-form',
    template: `
      <div class="sticky-container container">
        <div class="pull-right">
          <div class="row">
            <div class="col-sm-5 col-lg-5 hidden-xs">
              <div class="info-form">
                <form [formGroup]="form" (ngSubmit)="submitForm(form.value)">
                    <h2 class="text-center">{{formTitle}}</h2>
                    <hr>
                    <p class="slider-text text-center">{{ sliderText }}</p>
                    <nouislider
                            class="form-slider"
                            [keyboard]="true"
                            [step]="1000"
                            (update)="onUpdate($event)"
                            [behaviour]="'tap'"
                            [connect]="true"
                            [min]="MinAmount"
                            [max]="MaxAmount"
                            [formControl]="form.controls.amount"
                    ></nouislider>
                    <div class="row">
                        <div class="col-xs-4 text-left">
                            <span class="value value-min">{{ MinAmount | currency:'GBP':true:'1.0'}}</span>
                        </div>
                        <div class="text-center col-xs-4">
                            <span class="value value-current">{{ CurrentAmount | currency:'GBP':true:'1.0-0' }}</span>
                        </div>
                        <div class="text-right col-xs-4">
                            <span class="value value-max">{{ MaxAmount | currency:'GBP':true:'1.0'}}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-6 input-2">
                                <input class="form-control" placeholder="First Name" formControlName="first">
                            </div>
                            <div class="col-sm-6 input-2">
                                <input class="form-control" placeholder="Last Name" formControlName="last">
                            </div>
                        </div>
                          <div class="form-group" *ngIf="formErrors['first'] || formErrors['last']">
                         <div class="alert alert-danger" *ngIf="formErrors['first']">
                            {{ formErrors['first'] }}
                          </div>
                          <div class="alert alert-danger" *ngIf="!formErrors['first'] && formErrors['last']">
                            {{ formErrors['last'] }}
                          </div>                        
                     </div>

                    </div>
                    <div class="form-group">
                        <input class="form-control" placeholder="Phone" formControlName="phone">
                        <div class="alert alert-danger" *ngIf="formErrors['phone']">
                            {{ formErrors['phone'] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <input class="form-control" placeholder="Email" formControlName="email">
                        <div class="alert alert-danger" *ngIf="formErrors['email']">
                            {{ formErrors['email'] }}
                        </div>
                    </div>

                    <div class="form-group form-checkbox">
                         <p-checkbox binary="true" class="checkbox-mark" [formControlName]="'terms'"></p-checkbox>
                        <span [innerHTML]="terms"></span>
                       <div class="alert alert-danger" *ngIf="formErrors['terms']">
                            {{ formErrors['terms'] }}
                        </div>

                    </div>
                    <div class="submit">
                        <button type="submit" class="submit-text">{{ submitText }}</button>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    styles: [ `
      :host {
          color:#adadad;
          background: white;
      }

      .alert-danger {
      margin-top:5px;
      }
      @media screen and (min-width: 451px) {

        :host {
            position: absolute;
            top: 110px;
            z-index: 1;
            width: 100%;
            height:0;
            /*pointer-events: none;*/
        }
      }
      .checkbox {
          display: flex;
          margin: 20px 0;
          font-size: 0.9em;
      }
      .form-checkbox {
          -webkit-align-items: center;
          display: -webkit-inline-flex;
          align-items: center;
          display: inline-flex;
      }
      .form-checkbox .checkbox-mark {
          margin: 0 5px;
          background-color: none;
      }
      .form-checkbox .checkbox-mark + span {
          font-size: 0.8em;
          line-height: 1.2em;
      }
      input::-webkit-input-placeholder {
          color:#d8d8d8;
      }
      input{
          padding: 10px 25px;
          border-radius: 8px;
          border: 1px solid #d8d8d8;
          font-size: 1em;
          font-family: PT Sans,sans-serif;
          font-weight: 100;
          flex-grow: 10;
          margin-top:15px;
      }

      h2 {
          color:#002e5b;
          font-size: 1.3em;
          line-height: 1.2em;
          padding:0;
          text-transform: uppercase;
          margin:0;
          font-weight: 700;
          font-family: PT Sans,sans-serif;
      }

      hr {
        margin-top: 5px;
        margin-bottom: 10px;
      }

      :host >>> nouislider.form-slider {
        margin: 17px 0 12px;
      }

      :host >>> nouislider .noUi-target {
        height: 10px;  
        border-radius: 6px;
        border: 0;
        padding-right: 40px;
        background-color: #fde428;
        box-shadow: none;
      }

      :host >>> nouislider .noUi-target .noUi-base {
        border-radius: 6px;
      }

      :host >>> nouislider .noUi-target.noUi-horizontal .noUi-handle {
        width: 40px;
        height: 24px;
        left: 0;
        top: -6px;
        border-radius: 7px;
        box-shadow: 0px 0px 7px 1px #aaa;
      }

      :host >>> nouislider .noUi-target.noUi-horizontal .noUi-handle:after, 
      :host >>> nouislider .noUi-target.noUi-horizontal .noUi-handle:before {
        top: 1px;
        font-family: FontAwesome;  
        height: auto;
        left: auto;
        background-color: transparent;
        width: auto;
      }

      :host >>> nouislider .noUi-target.noUi-horizontal .noUi-handle:before {
        content: "\\f0d9";
        left: 3px;
      }

      :host >>> nouislider .noUi-target.noUi-horizontal .noUi-handle:after {
        content: "\\f0da";
        right: 3px;
      }

      .info-form {
          font-size: 14px;
          background: #fff;
          padding: 10px;
          border-radius: 10px;
          margin-top: 30px;
          border: 1px solid #d3d3d3;
      }
      .value {
          color: #adadad;
          padding:0;
          font-size: 0.9em;
      }
      .value-current {
          color: #002e5b;
          border: 2px solid #fde428;
          border-radius: 5px;
          font-weight: 700;
          padding: 0px 8px;
          font-size: 0.9em;
      }
      .slider-text {
          font-weight: 400;
          color: #adadad;
          font-size: 0.9em;
          letter-spacing: 0.03em;
      }

      .submit {
          display: flex;
      }
      .submit-text {
          text-transform: uppercase;
          color: #002e5b;
          font-size: 1.5em;
          background: #fde428;
          border-radius: 8px;
          font-family: PT Sans,sans-serif;
          font-weight: bold;
          border: 0;
          padding: 12px 10px 8px;
          flex-grow: 10;
          cursor: pointer;

      }
      .row > .input-2:first-child {
        padding-right: 7px;
      }
      .row > .input-2:nth-child(2) {
        padding-left: 7px;
      }

      @media screen and (min-width: 451px) {

          .info-form {
              width:270px;
              margin-top: 0;
              margin-left: auto;
          }

      }
    ` ]
})
export class InfoFormComponent implements OnInit {

  form:FormGroup;

  @Input('formTitle')   formTitle:string;
  @Input('sliderText')  sliderText:string;
  @Input('submitText')  submitText:string;

  termsDirty = `By ticking this box, you confirm that you agree to the 
        <a href="https://www.bassetgold.co.uk/website-terms-of-use/" target="_blank">Terms and Conditions</a>. 
        We will never share your information.`;
  terms;


  constructor(private formBl: InfoFormBl,
              private sanitizer: DomSanitizer
  ) {
    this.terms = sanitizer.bypassSecurityTrustHtml(this.termsDirty);

    this.form = formBl.createForm();

  }

  ngOnInit() { }

  get CurrentAmount() {
    return this.formBl.CurrentAmount;
  }

  get MinAmount() {
    return this.formBl.MinAmount;
  }
  get MaxAmount() {
    return this.formBl.MaxAmount;
  }

  get formErrors() {
    return this.formBl.formErrors;
  }

  onUpdate(event) {
    // console.log(event)
    this.formBl.onUpdate(event);
  }

  submitForm(value: any) {
    this.formBl.onSubmit(value);
  }


}
