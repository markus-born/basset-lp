import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bg-header',
    template: `
    	<div class="header">
		    <div class="header-container">
		        <div class="logo col-xs-4">
		        	<a href="#">
		            <img src="assets/logo-negative.png" class="img-responsive">
		            </a>
		        </div>
		        <div class="phone-number col-xs-8 text-right">
		            <div class="header-call">{{ ctaText }}
		                <a class="no-wrap" [href]="phoneNumber | telephonify">{{ phoneNumber }}</a>
		            </div>
		        </div>

		    </div>
		</div>
    `,
    styles: [ `
    	.header {
		    color: #fff;
		    background: #1f384d;
		    height: auto;
		    overflow: hidden;
		    /*padding: 10px;*/
		    font-size: 1.7em;
		    font-family: PT Sans Narrow,sans-serif;
		    display: flex;
		    padding: 10px;
		}
		.header .header-container {
			width: 100%;
		    display: flex;
		    flex-direction: row;
		    align-items: center;
		}

		.header .img-responsive {
		    display: block;
		    max-width: 100%;
		    height: 72px;
		    max-height: 150px;
		}
		/*.header-call {*/
		/*margin-right: 40px;*/
		/*margin-top: 12px;*/
		/*font-size: 1.7em;*/
		/*text-align: right;*/
		/*}*/
		.header-call a {
		    color:white;
		    text-decoration:none;
		}
		.header-call {
		    font-size: 16px;
		}

		@media screen and (min-width: 752px) {

		    .header-call {
		        font-size: 1.2em;
		    }

		}

		@media screen and (min-width: 1200px) {

		    .header-call {
		        font-size: 1.7em;
		    }

		}
    ` ]
})
export class BassetHeaderComponent implements OnInit {
    @Input('CTAText') ctaText:string = 'HI';
    @Input('PhoneNumber') phoneNumber:string = '111 1111 1111';

    constructor() { }

    ngOnInit() { }

}
