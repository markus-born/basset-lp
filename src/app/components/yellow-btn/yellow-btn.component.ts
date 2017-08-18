import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'basset-yellow-btn',
    templateUrl: './yellow-btn.component.html',
    styleUrls: [ './yellow-btn.component.css' ]
})
export class YellowBtnComponent implements OnInit {
    @Input('title') title:string;

    constructor() { }

    ngOnInit() { }

}
