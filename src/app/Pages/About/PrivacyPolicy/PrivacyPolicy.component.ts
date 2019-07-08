import { Component, OnInit } from '@angular/core';
import { AipomaService } from '../../../services/services';

@Component({
  selector: 'app-PrivacyPolicy',
  templateUrl: './PrivacyPolicy.component.html',
  styleUrls: ['./PrivacyPolicy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

   privacyPolicyData : any;

   constructor(public aipomaService : AipomaService) { }

   ngOnInit() {
      this.privacyPolicyData = this.aipomaService.getPrivacyPolicy();
   }

}
