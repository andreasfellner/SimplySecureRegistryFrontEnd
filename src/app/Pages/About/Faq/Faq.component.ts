import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/services';

@Component({
  selector: 'app-Faq',
  templateUrl: './Faq.component.html',
  styleUrls: ['./Faq.component.scss']
})
export class FaqComponent implements OnInit {

   faqData : any 

   constructor(public appService : AppService) { }

   ngOnInit() {
      this.faqData = this.appService.getFaq();
   }

}
