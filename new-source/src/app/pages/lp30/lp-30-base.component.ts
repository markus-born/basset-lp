import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { APP_CONFIG } from '../../config/app.config';
import { AppConfig } from '../../interfaces/app.interface';
@Component({
    selector: 'lp30',
    template: `
    	<bg-header [CTAText]="'PREFER TO CALL?'" [PhoneNumber]="config.phoneNumber"></bg-header>

		<info-form
            [formTitle]="formTitle"
            [sliderText]="sliderText"
            [submitText]="submitText"
        ></info-form>

		<block-half-bullets></block-half-bullets>

		<block-testimonial
		        [testimonial]="'So far I am very happy with my investment and it seems that you are providing a first class service'"
		        [backgroundUrl]="'assets/images/lp30/bg1.jpeg'">
		</block-testimonial>

		<block-centered-text></block-centered-text>

		<block-testimonial
		        [testimonial]="'I would highly recommend Basset & Gold as being easy to deal with, very helpful & understanding client\`s requirements & concerns.'"
		        [backgroundUrl]="'assets/images/lp30/bg2.jpeg'">
		</block-testimonial>

		<block-centered-bullets></block-centered-bullets>

		<block-testimonial
		        [testimonial]="'The phone contacts have been positive and helpful, no questions have been left unanswered'"
		        [backgroundUrl]="'assets/images/lp30/bg3.jpeg'">
		</block-testimonial>


		<bg-footer></bg-footer>
    `,
    styles: [`
    	@media screen and (min-width: 1200px) {

		    .sticky-container {
		        position: absolute;
		        top: 110px;
		        z-index: 1;
		        width: 100%;
		        height:0;
		        /*pointer-events: none;*/
		    }
		    .sticky-container div {
		        height:0;
		    }

		}
    `]
})
export class LP30BaseComponent implements OnInit {

    formTitle =  'get your free information pack now';
    sliderText = 'Choose your Investment Amount';
    submitText = 'get my free info pack';

    constructor(@Inject(APP_CONFIG) private config: AppConfig) {

    }

    ngOnInit() { }

}
