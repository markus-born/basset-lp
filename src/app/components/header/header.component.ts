import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bg-header',
    template: `
    	<nav class="header">
        <div class="logo">
        	<a href="#">
            <img src="assets/logo-negative.png" class="img-responsive">
          </a>
        </div>
        <div class="header-call">
        	{{ ctaText }}<br class="visible-xs">
          <a class="no-wrap" [href]="phoneNumber | telephonify">{{ phoneNumber }}</a>
        </div>
			</nav>
    `,
    styles: [ `
    	.header {
		    color: #fff;
		    background: #1f384d;
		    font-family: PT Sans Narrow,sans-serif;
		    padding: 16px 10px;
		    display: -webkit-flex;
		    -webkit-justify-content: space-between;
		    -webkit-align-items: center;
		    display: flex;
		    justify-content: space-between;
		    align-items: center;
			}

			.header .logo .img-responsive {
			    display: block;
			    max-width: 100%;
			    height: 47px;
			    max-height: 150px;
			}
			
			.header-call {
			    font-size: 13px;
			    font-family: PT Sans,sans-serif;
			    letter-spacing: 1px;
			}

			.header-call a {
			    color: white;
			    text-decoration: none;
			    font-family: PT Sans,sans-serif;
			    font-size: 16px;
			}

			@media screen and (min-width: 768px) {

					.header {
							padding: 10px 45px 5px;
					}

					.header .logo .img-responsive {
					    height: 68px;
					}

			    .header-call {
			        font-size: 28px;
			        font-family: PT Sans Narrow,sans-serif;
			    }

			    .header-call a {
					    color: white;
					    text-decoration: none;
					    font-size: inherit;
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
