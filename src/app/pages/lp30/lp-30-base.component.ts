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
          [submitText]="submitText"></info-form>

		  <div *ngFor="let block of blocks">
          <block-bullets 
              *ngIf="!block.isCentered" 
              [type]="block.type"
              [title]="block.title"
              [brief]="block.brief"
              [description]="block.descriptions">
          </block-bullets>

          <block-centered-text 
              *ngIf="block.isCentered"
              [title]="block.title"
              [descriptions]="block.descriptions"></block-centered-text>

          <block-testimonial
                  [testimonial]="block.testimonial.description"
                  [backgroundUrl]="block.testimonial.backgroundImg">
          </block-testimonial>
      </div>

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

    blocks:any = [
        {
            type: this.config.BULLET_HALF,
            title: 'Invest With Confidence',
            brief: 'Our unique fixed-income pensioner bonds give you the comfort of knowing your money is always working hard for you, earning regular interest.',
            descriptions: [
                {title: '', content:'Get returns of up to 4.32% per annum.'},
                {title: '', content:'100% record on full repayments, with interest!'},
                {title: '', content:'Easy, online application. No fees, no fuss.'},
                {title: '', content:'One-year bonds, extendable up to five years'}
            ],
            testimonial: {
                description: 'So far I am very happy with my investment and it seems that you are providing a first class service',
                backgroundImg: 'assets/images/lp30/bg1.jpeg'
            },
            isCentered: false
        },
        {
            title: 'Invest in a fixed-rate pensioner bond that fits your finances and your lifestyle',
            descriptions: [
                'Choose to have interest paid every month at the rate of 4.24% per annum, or wait until the end of each year and get an even higher rate of 4.32%. It’s your decision.', 
                'Investing with Basset & Gold is easy. We do all the hard work for you. And because we make sure all our bonds are asset-backed to give you, and us, added security, we have a 100% track record on full repayments.'
            ],
            testimonial: {
                description: "I would highly recommend Basset & Gold as being easy to deal with, very helpful & understanding client's requirements & concerns.",
                backgroundImg: 'assets/images/lp30/bg2.jpeg'
            },
            isCentered: true
        },
        {
            type: this.config.BULLET_CENTER,
            title: 'Basset & Gold advantages',
            brief: '',
            descriptions: [
                {title: '100% track records', content:'All payments, with full interest, have been made to every single customer. And we have a lot of them!'},
                {title: 'Asset-backed security', content:'Loans are backed by assets such as property, corporate debentures and other forms of security to protect our investments and your capital.'},
                {title: 'Investments to suit you!', content:'We have a wide range of products, including cash bonds, fixed monthly income, high-yield and pensioner bonds. We’ve even got an ISA!'}
            ],
            testimonial: {
                description: 'The phone contacts have been positive and helpful, no questions have been left unanswered',
                backgroundImg: 'assets/images/lp30/bg3.jpeg'
            },
            isCentered: false
        }
    ];
    
    constructor(@Inject(APP_CONFIG) private _config: AppConfig) {

    }

    get config() {
      return this._config;
    }

    ngOnInit() { }

}
