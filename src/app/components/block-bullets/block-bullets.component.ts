import { Component, OnInit, Input, Inject } from '@angular/core';
import { APP_CONFIG } from '../../config/app.config';
import { AppConfig } from '../../interfaces/app.interface';

@Component({
  selector: 'block-bullets',
  template: `
  	<div class="container w-1000">

	    <div class="flex" [class.secondary-block]="type == config.BULLET_CENTER">

	        <div [class]="type">
	            <h1>{{ title }}</h1>
	            <h2 *ngIf="brief">{{ brief }}</h2>
	            <ul>
	            	<li *ngFor="let element of description">
	            		<h3 *ngIf="element.title">{{ element.title }}</h3>
	            		{{ element.content }}
	            	</li>
	            </ul>
	            <div class="row action-btn" [class.visible-xs]="type == config.BULLET_HALF">
	                <basset-yellow-btn [title]="'Find out more'"></basset-yellow-btn>
	            </div>

	        </div>

	    </div>


	</div>
  `,
  styles: [ `
  	:host {

	}
	.text-box {
	    display: flex;
	    flex-direction: column;
	}
	h1 {
	    font-size: 2.9em;
	    color: #000;
	}
	h2 {
	    color: #494949;
	    font-size: 1.5em;
	    font-weight: 400;
	    line-height: 1.3em;
	    font-family: MuliRegular;
	}
	ul {
	    color: #494949;
	    padding-left: 25px;
	    font-size: 1.3em;
	    line-height: 1.6em;
	    font-weight: 200;
	    font-family: MuliLight;
	    margin-bottom: 30px;
	}
	ul li {
	    line-height: 1.1;
    	margin: 7px 0;
    	font-size: 1.1em;
	}
	.action-btn {
	    margin: 0px 0 50px;
	    display: flex;
	    justify-content: center;
	}

	ul li h3 {
	    margin: 0 0 5px;
	    font-size: 1.1em;
	    font-family: MuliBold;
	}
	[hidden] {
		visibility: hidden;
	}
	@media screen and (max-width: 767px) {
    .text-box {
	    padding: 0;
		}
		h1 {
	    font-size: 1.7em;
	    margin: 10px 0 5px;
		}
		h2 {
		    font-size: 1em;
		    line-height: 1.1em;
		    margin: 0;
		}
		ul {
		    padding-left: 15px;
		    margin: 3px 0 0;
		}
		ul li {
		    line-height: 1.1em;
	    	margin: 4px 0;
	    	font-size: 0.7em;
		}
		.action-btn {
		    margin: 10px 0 15px;
		    padding: 0 15px;
		}
		ul li h3 {
			margin: 10px 0;
		}
		.secondary-block .text-box {
			padding: 20px 0;
		}
		.secondary-block .action-btn {
			margin: 25px 0;
		}
  }
  ` ]
})
export class BlockBulletsComponent implements OnInit {
	@Input('title') title: string;
	@Input('brief') brief: string;
	@Input('type') type: string;
	@Input('description') description: Array<{title: string, content: string}>;

	constructor(@Inject(APP_CONFIG) private _config: AppConfig) { }

	ngOnInit() { }

	get config() {
    return this._config;
  }

}
