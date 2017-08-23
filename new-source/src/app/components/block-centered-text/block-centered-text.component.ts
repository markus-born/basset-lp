import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'block-centered-text',
  template: `
  	<div class="container w-1000">

	    <div class="flex">

	        <div class="col-sm-12 text-box">
	            <h1 [innerHTML]="title"></h1>
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
	    line-height: 1em;
	    font-family: MuliRegular;
	    margin: 0 0 10px;
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
	    margin: 30px 0;
	    display: flex;
	    justify-content: center;
	}
	@media screen and (max-width: 767px) {
			.text-box {
			    padding: 0;
			}
      h1 {
			    font-size: 1.7em;
			    margin: 10px 0 15px;
			}
			h2 {
				margin-bottom: 5px;
				font-size: 1em;
			}
			.action-btn {
				margin-bottom: 40px;
			}
  }
  ` ]
})
export class BlockCenteredTextComponent implements OnInit {
	@Input() title:string;
	@Input() descriptions:any;

  constructor() { }

  ngOnInit() { }

}
