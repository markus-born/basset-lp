import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { APP_CONFIG } from '../../config/app.config';
import { AppConfig } from '../../interfaces/app.interface';
@Component({
    selector: 'secondary-lp30',
    template: `
        <bg-header [CTAText]="'PREFER TO CALL?'" [PhoneNumber]="'0800 249 4555'"></bg-header>

        <info-form
            [formTitle]="formTitle"
            [sliderText]="sliderText"
            [submitText]="submitText">
        </info-form>

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
export class SecondaryLP30Component implements OnInit {

    formTitle =  'get your free information pack now';
    sliderText = 'Choose your Investment Amount';
    submitText = 'get my free info pack';

    blocks:any = [
        {
            type: this.config.BULLET_HALF,
            title: 'Are you getting 30% pa from your investments?',
            brief: 'Our 4-Year High-Yield Bond delivers just that – and more! Get a fixed-rate return of £1,545 for every £5,000 invested.',
            descriptions: [
                {title: '', content: "Asset-backed security"},
                {title: '', content: "Annual interest at a fixed rate of 7.72% AER. The interest is reinvested into the bond thus creating a high yield."},
                {title: '', content: "No set-up fees, management costs or on going charges"},
                {title: '', content: "Personal service – Every investor is assigned a dedicated relationship manager"},
                {title: '', content: "The interest rate will remain the same until the end of the bond's term and does not change based on stock market performance, so your return is known at the outset"},
                {title: '', content: "Invest from as little as £1,000 up to £500,000"}
            ],
            testimonial: {
                description: 'So far I am very happy with my investment and it seems that you are providing a first class service.',
                backgroundImg: 'assets/images/secondary-lp30/bg1.jpeg'
            },
            isCentered: false
        },
        {
            title: 'Power-charge your portfolio <br class="hidden-xs">30.9% return over 4 years',
            descriptions: [
                'Our high-yield compounding bond is ideal for smart investors looking for a reliable, fixed-rate return over a short-to-medium investment period.',
                'The minimum investment is jut £1,000 and applying is fast and simple. But you’ll need to hurry. Our application window closes soon.'
            ],
            testimonial: {
                description: "I would highly recommend Basset & Gold as being easy to deal with, very helpful & understanding client's requirements & concerns.",
                backgroundImg: 'assets/images/secondary-lp30/bg2.jpeg'
            },
            isCentered: true
        },
        {
            type: this.config.BULLET_CENTER,
            title: 'Basset & Gold advantages',
            brief: '',
            descriptions: [
                {title: '100% track record', content: "All payments, with full interest, have been made to every single customer. And we have a lot of them!"},
                {title: 'Asset-backed security', content: "Loans are backed by assets such as property, corporate debentures and other forms of security."},
                {title: 'Investments to suit you!', content: "We have a wide range of products, including cash bonds, fixed monthly income, high-yield and pensioner bonds. We’ve even got an ISA!"}
            ],
            testimonial: {
                description: 'The phone contacts have been positive and helpful, no questions have been left unanswered.',
                backgroundImg: 'assets/images/secondary-lp30/bg3.jpeg'
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
