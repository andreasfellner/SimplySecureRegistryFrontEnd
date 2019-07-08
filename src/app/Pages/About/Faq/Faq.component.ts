import { Component, OnInit } from '@angular/core';
import { AipomaService } from '../../../services/services';

@Component({
  selector: 'app-Faq',
  templateUrl: './Faq.component.html',
  styleUrls: ['./Faq.component.scss']
})
export class FaqComponent implements OnInit {

   faqData : any 

   constructor(public aipomaService : AipomaService) { }

   ngOnInit() {
      this.faqData = this.aipomaService.getFaq();
   }

}
