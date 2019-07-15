import { Routes } from '@angular/router';
import { PaymentComponent } from './Payment/Payment.component';

export const CheckoutRoutes : Routes = [
   {
      path : "",
      component: PaymentComponent 
   },
   { 
		path: 'payment', 
		component: PaymentComponent 
   }
]