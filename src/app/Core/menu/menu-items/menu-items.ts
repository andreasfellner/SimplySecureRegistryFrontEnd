import { Injectable } from '@angular/core';

/*
 * Menu interface
 */
export interface Menu {
	state: string;
	name?: string;
	type?: string;
	icon?: string;
	children?: Menu[];
}

const HeaderItems= [
  {
    state:'sourceKeys',
    name:"SOURCE KEYS",
    type:"link",
    icon: 'party_mode'
  },
  {
    state:'dataObject',
    name:"DATA OBJECT",
    type:"link",
    icon: 'party_mode'
  },
  {
    state: "checkout/payment",
    name : "BILLING INFO",
    type: "link",
    icon: "pages"
    /*
    children: [
      {  
        state: 'checkout', 
        name: 'CHECKOUT',
        type: 'link',
        icon: 'arrow_right_alt'
      },
      {  
        state: 'checkout/payment', 
        name: 'PAYMENT',
        type: 'link',
        icon: 'arrow_right_alt'
      }
    ]
    */
  },
  {
    state:'contact',
    name:"CONTACT US",
    type:"link",
    icon: 'perm_contact_calendar'
  }
];

const FooterItems = [
  {
    state: 'about',
    name: 'ABOUT US',
    type: 'link',
    icon: 'arrow_right_alt',
  },
  {
    state: 'privacy-policy',
    name: 'PRIVACY POLICY',
    type: 'link',
    icon: 'arrow_right_alt',
  },
  {
    state: 'faq',
    name: 'FAQ',
    type: 'link',
    icon: 'arrow_right_alt',
  },
  {
    state: 'contact',
    name: "CONTACT US",
    type: "link",
    icon: 'perm_contact_calendar',
  },

]


@Injectable()
export class MenuItems {

   /*
    * Get all header menu
    */
   getMainMenu(): Menu[] {
      return HeaderItems;
   }

   /*
    * Get all footer menu
    */
   getFooterOneMenu(): Menu[] {
      return FooterItems;
   }
}
