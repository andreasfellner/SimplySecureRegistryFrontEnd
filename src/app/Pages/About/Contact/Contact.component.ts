import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/services';

@Component({
  selector: 'app-contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.scss']
})
export class ContactComponent implements OnInit {

   contactInfo  : any;
   emailPattern : any = /\S+@\S+\.\S+/;

   constructor(public appService : AppService) {
      this.contactInfo  = this.appService.getContactInfo();
   }

   ngOnInit() {
      
   }

}

