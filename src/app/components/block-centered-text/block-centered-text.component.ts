import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'block-centered-text',
  template: `
  	<div class="container max1024">

	    <div class="flex">

	        <div class="col-sm-12 col-md-10 col-lg-10 col-lg-offset-1 col-md-offset-1 text-box">
	            <h1>{{title}}</h1>
	            <h2 *ngFor="let desc of descriptions">{{desc}}</h2>
	            <div class="row action-btn">
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
	.action-btn {
	    margin-top:30px;
	    display: flex;
	    justify-content: center;
	    margin-bottom: 15px;
	}
  ` ]
})
export class BlockCenteredTextComponent implements OnInit {
	@Input() title:string;
	@Input() descriptions:any;

  constructor() { }

  ngOnInit() { }

}
