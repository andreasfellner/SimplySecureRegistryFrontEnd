import { Component, HostBinding, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AppService } from '../../../services/services';

@Component({
  selector: 'app-SidebarMenu',
  templateUrl: './SidebarMenu.component.html',
  styleUrls: ['./SidebarMenu.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SideBarMenuComponent implements OnInit {
   
   expanded       : boolean;
   @Input() item  : any;
   @Input() depth : number;
   @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;

   constructor(public router: Router, 
               public appService: AppService) {

      if (this.depth === undefined) {
         this.depth = 0;
      }
   }

   ngOnInit() {
   }

   onItemSelected(item: any) {
      if (!item.children || !item.children.length) {
         if(item.type == 'link'){
            this.router.navigate([item.state]);
         } else {
            this.router.navigate([item.state],{ queryParams:{ category: item.queryState }});
         }
         this.appService.sidenavOpen = false;
      }
      if (item.children && item.children.length) {
         this.expanded = !this.expanded;
      }
   }
}
