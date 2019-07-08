import { Component, OnInit } from '@angular/core';
import { AipomaService } from '../../../services/services';

@Component({
  selector: 'app-contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.scss']
})
export class ContactComponent implements OnInit {

   contactInfo  : any;
   emailPattern : any = /\S+@\S+\.\S+/;

   constructor(public aipomaService : AipomaService) {
      this.contactInfo  = this.aipomaService.getContactInfo();
   }

   ngOnInit() {
      
   }

}

