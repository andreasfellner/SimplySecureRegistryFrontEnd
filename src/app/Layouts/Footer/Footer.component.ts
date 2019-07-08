import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../../Core/menu/menu-items/menu-items';

@Component({
  selector: 'Footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.scss']
})
export class FooterComponent implements OnInit {

   constructor(public menuItems : MenuItems) { }

   ngOnInit() {
   }

}
