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
      <div class="container w-1000">
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
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        align-items: center;
        position: relative;
    }
    .testimonial-wrapper {
        background: rgba(49, 39, 52, 0.45);
        color: white;
        font-size: 1.5em;
        font-weight: 200;
        font-style: italic;
        padding: 20px 40px 40px 100px;
        bottom: 80px;
        width: 570px;
        position: absolute;
        left: 0;
        font-family: MuliLight;
    }
    @media screen and (max-width: 767px) {
      .testimonial-wrapper {
        width: -webkit-calc(100vw - 25px);
        width: calc(100vw - 25px);
        font-size: 1em;
        padding: 15px;
        bottom: 30px;
      }
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
