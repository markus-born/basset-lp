import { Injectable }       from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
}                           from "@angular/forms";

import {InfoFormService}    from "./info-form.service";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import {Http} from "@angular/http";


@Injectable()
export class InfoFormBl {
  minAmount = 1000;
  maxAmount = 500000;
  currentAmount = this.minAmount;

  form:FormGroup;

  constructor(private formBuilder:FormBuilder,
              private formService:InfoFormService,
              private http:Http
  ) {


    this.onValueChanged(); // (re)set validation messages now

  }

  createForm() {

    const phoneField = new FormControl('',[ Validators.required ])

    this.form = this.formBuilder.group({
      'amount': [ this.minAmount ],
      'first':['', Validators.required ],
      'last':['' , Validators.required ],
      'email':['', Validators.required ],
      'phone': phoneField,
      'terms':['', Validators.required ]

    });

    this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();

    phoneField.valueChanges
      .filter(val => {
        let cleanPhone = val.replace(/[^0-9]/g,'');
        return cleanPhone.length >= 11
      })
      .debounceTime(500)
      .switchMap(val => this.formService.validatePhone(val))
      .subscribe(res => {

        console.log(res)
        let validation = res.json();

        if (validation['valid']) {
          phoneField.setErrors(null);
        } else {
          phoneField.setErrors({ validPhone: true });
        }

        this.onValueChanged();

      });

    return this.form;

  }



  onValueChanged(data?: any) {
    if (!this.form) { return; }
    const form = this.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }

    console.log(this.formErrors);
  }

  formErrors = {
    'first': '',
    'last': '',
    'phone': '',
    'email': '',
    'terms': ''
  };

  validationMessages = {
    'first': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'last': {
      'required': 'last is required.'
    },
    'email': {
      'required': 'email is required.'
    },
    'phone': {
      'required'  : 'phone is required.',
      'validPhone': 'number is invalid'
    },
    'terms': {
      'required': 'terms is required.'
    }
  };

  get CurrentAmount() {
    return this.currentAmount;
  }
  set CurrentAmount(amount) {
    this.currentAmount = amount
  }

  get MinAmount() {
    return this.minAmount
  }
  get MaxAmount() {
    return this.maxAmount
  }

  onUpdate(event) {
    // console.log(event)
    this.CurrentAmount = event
  }

  onSubmit() {
    const form = this.form;
    console.log(form);
  }

}
