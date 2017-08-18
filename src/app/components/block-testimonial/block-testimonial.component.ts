import {Component, Input, OnInit}   from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
}                                    from '@angular/animations';

@Component({
  selector: 'block-testimonial',
  templateUrl: './block-testimonial.component.html',
  styleUrls: [ './block-testimonial.component.css' ]
})

export class BlockTestimonialComponent implements OnInit {

  @Input ('backgroundUrl') backgroundUrl:string;
  @Input ('testimonial') testimonial:string;

  state: string = '';

  get BackgroundImg() {
    return `url(${this.backgroundUrl})`;
  }

  get Testimonial() {
    return this.testimonial;
  }

  constructor() {
  }


  ngOnInit() {
  }
}
