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

		<!-- block-half-bullets></block-half-bullets -->
		<block-bullets [type]="config.BULLET_HALF"
			[title]="'Invest With Confidence'"
			[brief]="'Our unique fixed-income pensioner bonds give you the comfort of knowing your money is always working hard for you, earning regular interest.'"
			[description]="[
		    	{title: '', content:'Get returns of up to 4.32% per annum.'},
				{title: '', content:'100% record on full repayments, with interest!'},
				{title: '', content:'Easy, online application. No fees, no fuss.'},
				{title: '', content:'One-year bonds, extendable up to five years'}
		    ]">
		</block-bullets>

		<block-testimonial
		        [testimonial]="'So far I am very happy with my investment and it seems that you are providing a first class service'"
		        [backgroundUrl]="'assets/images/lp30/bg1.jpeg'">
		</block-testimonial>

		<block-centered-text></block-centered-text>

		<block-testimonial
		        [testimonial]="'I would highly recommend Basset & Gold as being easy to deal with, very helpful & understanding client\`s requirements & concerns.'"
		        [backgroundUrl]="'assets/images/lp30/bg2.jpeg'">
		</block-testimonial>

		<!-- block-centered-bullets></block-centered-bullets -->
		<block-bullets [type]="config.BULLET_CENTER"
			[title]="'Basset & Gold advantages'"
			[brief]="''"
			[description]="[
		    	{title: '100% track records', content:'All payments, with full interest, have been made to every single customer. And we have a lot of them!'},
				{title: 'Asset-backed security', content:'Loans are backed by assets such as property, corporate debentures and other forms of security to protect our investments and your capital.'},
				{title: 'Investments to suit you!', content:'We have a wide range of products, including cash bonds, fixed monthly income, high-yield and pensioner bonds. We’ve even got an ISA!'}
		    ]">
		</block-bullets>

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
