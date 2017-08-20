import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'block-half-bullets',
  template: `
  	<div class="container max1024">

	    <div class="flex">

	        <div class="col-sm-12 col-md-7 col-lg-7 text-box">
	            <h1>Invest With Confidence</h1>
	            <h2>Our unique fixed-income pensioner bonds give you the comfort of knowing your money is always working hard for you, earning regular interest.</h2>
	            <ul>
	                <li>Get returns of up to 4.32% per annum.</li>
	                <li>100% record on full repayments, with interest!</li>
	                <li>Easy, online application. No fees, no fuss.</li>
	                <li>One-year bonds, extendable up to five years </li>
	            </ul>
	            <div class="row action-btn" [ngStyle]="{visibility:'hidden'}">
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
	    display: flex;
	    justify-content: center;
	    margin-bottom: 15px;
	}
  ` ]
})
export class BlockHalfBulletsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
