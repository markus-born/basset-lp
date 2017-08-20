import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'block-bullets',
  template: `
  	<div class="container max1024">

	    <div class="flex">

	        <div class="col-sm-12 col-md-7 col-lg-7 text-box">
	            <h1>{{ title }}</h1>
	            <h2 *ngIf="brief">{{ brief }}</h2>
	            <ul>
	            	<li *ngFor="let element of description">
	            		<h3 *ngIf="element.title">{{ element.title }}</h3>
	            		{{ element.content }}
	            	</li>
	            </ul>
	            <div class="row action-btn" [hidden]="!showMore">
	                <basset-yellow-btn [title]="'Find out more'"></basset-yellow-btn>
	            </div>

	        </div>

	    </div>


	</div>
  `,
  styles: [ `
  	:host {

	}
	.container {
	    margin-top:20px;
	    margin-bottom: 20px;
	    padding:20px 0;
	}
	.text-box {
	    display: flex;
	    flex-direction: column;
	}
	h1 {
	    font-size: 2.6em;
	    color: #000;
	}
	h2 {
	    color: #494949;
	    font-size: 1.3em;
	    font-weight: 400;
	    line-height: 1.2em;
	}
	ul {
	    color: #494949;
	    padding: 0;
	    font-size: 1.3em;
	    line-height: 1.6em;
	    font-weight: 200;
	    margin: 25px;
	    flex-grow: 1;
	}
	ul li {
	    margin-top: 10px;
	}
	.action-btn {
	    margin-top:30px;
	    display: flex;
	    justify-content: center;
	    margin-bottom: 15px;
	}

	h3 {
	    margin:0;
	}
	[hidden] {
		visibility: hidden;
	}
  ` ]
})
export class BlockBulletsComponent implements OnInit {
	@Input('title') title: string;
	@Input('brief') brief: string;
	@Input('type') type: string;
	@Input('showMore') showMore: boolean;
	@Input('description') description: Array<{title: string, content: string}>;
	constructor() { }

	ngOnInit() { }

}
