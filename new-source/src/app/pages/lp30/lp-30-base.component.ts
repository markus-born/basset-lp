import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lp30',
    template: `
    	<bg-header [CTAText]="'PREFER TO CALL?'"></bg-header>

		<div class="sticky-container">

		    <div class="container">
		        <div class="row">
		            <div class="col-md-12 col-lg-5 col-lg-offset-7">

		                <info-form
		                        [formTitle]="formTitle"
		                        [sliderText]="sliderText"
		                        [submitText]="submitText"
		                ></info-form>

		            </div>
		        </div>

		    </div>

		</div>

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

    ngOnInit() { }

}
