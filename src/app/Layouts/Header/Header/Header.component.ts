import { Component, OnInit } from '@angular/core';
import { ApiService, AipomaService } from 'src/app/services/services';
import { User } from 'src/app/services/models';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss']
})
export class HeaderComponent implements OnInit {

   currentUser: User;
   toggleActive     : boolean = false;

   constructor(public aipomaService: AipomaService,
               private router: Router,
               private authenticationService: ApiService) {

                  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
               }

   ngOnInit() {
   }

   public toggleSidebar()
   {
      this.aipomaService.sidenavOpen = !this.aipomaService.sidenavOpen;
   }
 
   public toggleSearch() {
      $('app-main').toggleClass('form-open');
   }
  
}
