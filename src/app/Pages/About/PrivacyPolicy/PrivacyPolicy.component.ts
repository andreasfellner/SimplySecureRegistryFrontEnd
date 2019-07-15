import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/services';

@Component({
  selector: 'app-PrivacyPolicy',
  templateUrl: './PrivacyPolicy.component.html',
  styleUrls: ['./PrivacyPolicy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

   privacyPolicyData : any;

   constructor(public appService : AppService) { }

   ngOnInit() {
      this.privacyPolicyData = this.appService.getPrivacyPolicy();
   }

}
