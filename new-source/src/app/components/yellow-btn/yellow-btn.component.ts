import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'basset-yellow-btn',
    template: `
    	<button class="basset-yellow-btn">{{ title }}</button>
    `,
    styles: [ `
    	.basset-yellow-btn {
		    text-transform: uppercase;
		    color: #002e5b;
		    font-size: 2rem;
		    background: #fde428;
		    border-radius: 8px;
		    font-family: PT Sans,sans-serif;
		    font-weight: bold;
		    border: 0;
		    padding: 12px 40px;
		    flex-grow: 10;
		    cursor: pointer;
		}
    ` ]
})
export class YellowBtnComponent implements OnInit {
    @Input('title') title:string;

    constructor() { }

    ngOnInit() { }

}
