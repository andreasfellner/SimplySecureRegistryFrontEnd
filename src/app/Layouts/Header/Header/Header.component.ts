import { Component, OnInit } from '@angular/core';
import { ApiService, AppService } from 'src/app/services/services';
import { User } from 'src/app/services/models';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
   selector: 'app-Header',
   templateUrl: './Header.component.html',
   styleUrls: ['./Header.component.scss']
})
export class HeaderComponent implements OnInit {

   currentUser: User;
   toggleActive: boolean = false;

   mode: string = "NoFixed";
   constructor(public appService: AppService,
      public translate: TranslateService,
      private router: Router,
      private apiService: ApiService) {

      this.apiService.currentUser.subscribe(x => this.currentUser = x);
   }

   ngOnInit() {
   }

   public toggleSidebar() {
      this.appService.sidenavOpen = !this.appService.sidenavOpen;
   }

   public toggleSearch() {
      $('app-main').toggleClass('form-open');
   }

}
