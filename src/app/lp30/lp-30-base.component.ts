import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lp30',
    templateUrl: './lp-30-base.component.html',
    styleUrls: [ './lp-30-base.component.css' ]
})
export class LP30BaseComponent implements OnInit {

    formTitle =  'get your free information pack now';
    sliderText = 'Choose your Investment Amount';
    submitText = 'get my free info pack';

    ngOnInit() { }

}
