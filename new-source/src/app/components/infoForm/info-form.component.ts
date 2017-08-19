import {
    Component,
    OnInit,
    Input}                    from '@angular/core';
import {
    FormGroup,
    FormBuilder
}                             from '@angular/forms';
import { DomSanitizer }       from '@angular/platform-browser';

import { InfoFormService }    from './info-form.service';
import { InfoFormBl }         from './info-form.bl';


@Component({
    selector: 'info-form',
    templateUrl: './info-form.component.html',
    styleUrls: [ './info-form.component.css' ]
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


  constructor(private formBuilder: FormBuilder,
              private formService: InfoFormService,
              private formBl: InfoFormBl,
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

  onUpdate(event) {
    // console.log(event)
    this.formBl.onUpdate(event);
  }

  onSubmit() {
    this.formBl.onSubmit();
  }


}
