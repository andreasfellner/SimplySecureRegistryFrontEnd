import { Routes } from '@angular/router';
import { MainComponent } from './Main/Main.component';
import { AuthGuard } from './services/guards';

export const AppRoutes: Routes = [
   {
      path: '',
      redirectTo: 'sourceKeys',
      pathMatch: 'full',
   }, {
      path: '',
      component: MainComponent,
      children: [
         {
            path: 'sourceKeys',
            loadChildren: './Pages/SourceKeys/sourceKeys.module#SourceKeyModule', canActivate: [AuthGuard]
         },
         {
            path: 'dataObject',
            loadChildren: './Pages/DataObject/dataObject.module#DataObjectModule', canActivate: [AuthGuard]
         },
         {
            path: 'checkout',
            loadChildren: './Pages/Checkout/Checkout.module#CheckoutModule', canActivate: [AuthGuard]
         },
         {
            path: 'session',
            loadChildren: './Pages/Session/Session.module#SessionModule'
         },
         {
            path: '',
            loadChildren: './Pages/About/About.module#AboutModule'
         },
         {
            path: 'account',
            loadChildren: './Pages/UserAccount/UserAccount.module#UserAccountModule'
         }
      ]
   },
   {
      path: '**',
      redirectTo: 'not-found'
   }
]
