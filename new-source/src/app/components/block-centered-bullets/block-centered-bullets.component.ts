import {
    Component,
    OnInit
}                   from '@angular/core';

@Component({
    selector: 'block-centered-bullets',
    template: `
	    <div class="container max1024">
		    <div class="flex">
		        <div class="col-sm-12 col-md-10 col-lg-10 col-lg-offset-1 col-md-offset-1 text-box">
		            <h1>Basset & Gold advantages
		            </h1>
		            <ul>
		                <li><h3>100% track records</h3>
		                    All payments, with full interest, have been made to every single customer. And we have a lot of them!
		                </li>
		                <li><h3>Asset-backed security</h3>
		                    Loans are backed by assets such as property, corporate debentures and other forms of security to protect our investments and your capital.</li>
		                <li><h3>Investments to suit you!</h3>
		                    We have a wide range of products, including cash bonds, fixed monthly income, high-yield and pensioner bonds. We’ve even got an ISA!
		                </li>
		            </ul>
		            <div class="row action-btn">
		                <basset-yellow-btn [title]="'Find out more'"></basset-yellow-btn>
		            </div>
		        </div>
		    </div>
		</div>
    `,
    styles: [`
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
		ul li {
		    margin-top: 10px;
		}
		.action-btn {
		    margin-top:30px;
		    display: flex;
		    justify-content: center;
		    margin-bottom: 15px;
		}

		h3 {
		    margin:0;
		}
    `]
})
export class BlockCenteredBulletsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
