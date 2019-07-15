import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/services'
import { User } from 'src/app/services/models';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public currentUser: User;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.currentUser.subscribe(
      user => {
        console.log("user", user);
        this.currentUser = user;
      }
    );
  }

}
