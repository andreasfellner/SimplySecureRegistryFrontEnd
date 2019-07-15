import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/services';
import { User } from '../../services/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-HeaderUserProfileDropdown',
  templateUrl: './HeaderUserProfileDropdown.component.html',
  styleUrls: ['./HeaderUserProfileDropdown.component.scss']
})
export class HeaderUserProfileDropdownComponent implements OnInit {

  currentUser: User;
  email : string;

  constructor(private router: Router,
    private authenticationService: ApiService)
  { 
      this.authenticationService.currentUser.subscribe(x => {
        this.currentUser = x;
        if(this.currentUser != null)
        {
          this.email = this.currentUser.email;
          //console.log("current User", this.currentUser);
        }
        
      });
  }

  ngOnInit() {
    
  }

  logout() {

    //console.log("logout");
    this.authenticationService.logout();
    //this.router.navigate(['/session/signin']);
  }


}
