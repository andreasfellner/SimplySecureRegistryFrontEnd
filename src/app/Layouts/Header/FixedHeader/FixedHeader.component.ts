import { Component, OnInit } from '@angular/core';
import { AppService, ApiService } from '../../../services/services';
import { User } from 'src/app/services/models';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'app-FixedHeader',
   templateUrl: './FixedHeader.component.html',
   styleUrls: ['./FixedHeader.component.scss']
})
export class FixedHeaderComponent implements OnInit {

   mode: string = "Fixed";
   currentUser: User;
   constructor(private appService: AppService,
      public translate: TranslateService,
      private authenticationService: ApiService) {

      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

   ngOnInit() {
   }

   public toggleSidebar() {
      this.appService.sidenavOpen = !this.appService.sidenavOpen;
   }

}
