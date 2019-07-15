import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-AppLogo',
  templateUrl: './AppLogo.component.html',
  styleUrls: ['./AppLogo.component.scss']
})
export class AppLogoComponent implements OnInit {

  @Input('mode') mode : string;
  constructor() { }

  public width = 96;
  public height = 96;

  ngOnInit() {
    console.log('AppLogo', this.mode);
  }

}
