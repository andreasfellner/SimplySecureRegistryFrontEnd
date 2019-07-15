import { Routes } from '@angular/router';

import { SigninComponent } from './Signin/Signin.component';
import { PaymentComponent } from './Payment/Payment.component';
import { FinalReceiptComponent } from './FinalReceipt/FinalReceipt.component';

export const CheckoutRoutes : Routes = [
   {
      path : "",
      component: PaymentComponent 
   },
   { 
		path: 'payment', 
		component: PaymentComponent 
   }
   /*
   { 
      path: 'signin', 
      component: SigninComponent 
   },
	
   {
      path: 'final-receipt',
      component: FinalReceiptComponent
   }*/
]