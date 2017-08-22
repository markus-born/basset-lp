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
  template: `
    <div class="parralax-box"
       [ngStyle]="{'background-image': BackgroundImg}">
      <div class="container">
          <div class="testimonial"
          >
              <div class="row" >
                  <div class="testimonial-wrapper col-xs-12 col-md-8 col-lg-8">
                      "{{ Testimonial }}"
                  </div>
              </div>

          </div>
      </div>
    </div>
  `,
  styles: [ `
    .parralax-box {

        /* Set a specific height */
        height: 520px;

        /* Create the parallax scrolling effect */
        /*background-attachment: fixed;*/
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;

        align-items: center;
        position: relative;
    }
    .testimonial-wrapper {
        background: rgba(49, 39, 52, 0.45);
        color: white;
        font-size: 1.3em;
        font-weight: 200;
        font-style: italic;
        padding: 40px;
        bottom: 60px;
        width: 90%;
        max-width: 640px;
        position: absolute;
        left: 0;
    }
  ` ]
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
