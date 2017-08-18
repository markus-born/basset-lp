import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bg-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.css' ]
})
export class BassetHeaderComponent implements OnInit {
    @Input('CTAText') ctaText:string = 'HI';

    constructor() { }

    ngOnInit() { }

}
