import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'basset-yellow-btn',
    template: `
    	<button class="basset-yellow-btn" (click)="joinModal.open()">{{ title }}</button>
    	<modal #joinModal>
    		<modal-header>
    			Join now and start achieving better interest rates
    		</modal-header>
    		<modal-content>
				<div class="row">
					<div class="col-sm-6">
						<div class="form-group">
							<input type="text" required class="form-control" placeholder="First Name">
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group">
							<input type="text" required class="form-control" placeholder="Last Name">
						</div>
					</div>

					<div class="col-sm-12">
						<div class="form-group">
							<input type="tel" required class="form-control" placeholder="Daytime Telephone Number">
						</div>
					</div>
					<div class="col-sm-12">
						<div class="form-group">
							<input type="email" required class="form-control" placeholder="Email">
						</div>
					</div>
					<div class="col-sm-12">
                        <div class="text-center consent">
                            <label> By submitting, you confirm that you agree to the <a
                                    href="https://www.bassetgold.co.uk/website-terms-of-use/"
                                    target="_blank">Terms and Conditions</a>. We will never share your
                                information.</label>
                        </div>
                    </div>
				</div>
			</modal-content>
			<modal-footer>
				<div class="row">
					<div class="col-sm-12 text-center">
                        <button
                            class="btn pull-right btn-primary btn-block small-xs" type="submit">
                            SEND
                        </button>
                    </div>
				</div>
			</modal-footer>
		</modal>
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

    ngOnInit() { }

    openJoinModal() {
    	
    }

}
