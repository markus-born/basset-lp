import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bg-footer',
    templateUrl: './footer.component.html',
    styleUrls: [ './footer.component.css' ]
})
export class BgFooterComponent implements OnInit {
    riskTitle = 'Risk Warning';
    riskContent = `Past Performance is not indicative of future results. Investment through the Basset & Gold Fixed Income Bonds involves lending to companies or individuals and therefore your capital is at risk and interest payments are not guaranteed if the borrower defaults and investors should note that it could take the time it takes to liquidate an asset held as security, such as selling a property, in order to get money back at an acceptable price. Detailed risk information is available in the invitation document that is provided exclusively to eligible investors.`;
    footerTxt1 = `The invitation document and website are approved as a financial promotion for the purposes of section 21 of the Financial Services and Markets Act 2000 by Gallium Fund Solutions Limited, Gallium House, Unit 2, Station Court, Borough Green, Sevenoaks, Kent, TN15 8AD which is authorised and regulated by the Financial Conduct Authority (FCA registration number: 487176) to conduct investment business.`;
    footerTxt2 = `Basset Gold Ltd. is an appointed representative of Gallium Fund Solutions Limited which is authorised and regulated by the Financial Conduct Authority.
Basset Gold Ltd. (company number 10418483) is registered in England and has its registered office at 6 Percy Street, London W1T 1DQ.
By continuing your visit to this site, you agree to the use of cookies`;
    copyright = '©2017 Basset Gold Ltd. All rights reserved.';

    constructor() { }

    ngOnInit() { }

}
