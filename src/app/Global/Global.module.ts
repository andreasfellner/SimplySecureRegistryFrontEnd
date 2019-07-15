import { NgModule }   from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
import { MatButtonModule, 
         MatBadgeModule,
         MatCardModule, 
         MatMenuModule, 
         MatToolbarModule, 
         MatIconModule, 
         MatInputModule, 
         MatDatepickerModule, 
         MatNativeDateModule, 
         MatProgressSpinnerModule,
         MatTableModule, 
         MatExpansionModule, 
         MatSelectModule,
         MatSnackBarModule, 
         MatTooltipModule, 
         MatChipsModule, 
         MatListModule, 
         MatSidenavModule, 
         MatTabsModule, 
         MatProgressBarModule,
         MatCheckboxModule,
         MatSliderModule,
         MatRadioModule,
         MatDialogModule,
         MatGridListModule,
         
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarRatingModule } from "ngx-bar-rating";
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { PageTitleComponent } from './PageTitle/PageTitle.component';
import { ContactFormComponent } from './ContactForm/ContactForm.component';
import { AboutInfoComponent } from './AboutInfo/AboutInfo.component';
import { CommonSignInComponent } from './CommonSignIn/CommonSignIn.component';
import { HeaderUserProfileDropdownComponent } from './HeaderUserProfileDropdown/HeaderUserProfileDropdown.component';
import { AppLogoComponent } from './AppLogo/AppLogo.component';
import { HomePageSliderComponent } from './Slider/HomePageSlider/HomePageSlider.component';
import { ConfirmationPopupComponent } from './ConfirmationPopup/ConfirmationPopup.component';

import { CommonSignUpComponent } from './CommonSignUp/CommonSignUp.component';
import { SourceKeyDialogComponent } from './SourceKeyDialog/SourceKeyDialog.component';
import { DataObjectDialogComponent } from './DataObjectDialog/DataObjectDialog.component';
import { AppLogoFixedComponent } from './AppLogoFixed/AppLogoFixed.component';
import { CommonForgotPasswordComponent } from './CommonForgotPassword/CommonForgotPassword.component';
import { LanguageDropDownComponent } from './LanguageDropDown/LanguageDropDown.component'


@NgModule({
   imports: [
      CommonModule,
      RouterModule,
      MatBadgeModule,
      MatButtonModule, 
      FlexLayoutModule,
      MatCardModule, 
      MatMenuModule, 
      MatToolbarModule, 
      MatIconModule, 
      MatInputModule, 
      MatDatepickerModule, 
      MatNativeDateModule, 
      MatProgressSpinnerModule,
      MatTableModule, 
      MatExpansionModule, 
      MatSelectModule, 
      MatSnackBarModule, 
      MatTooltipModule, 
      MatChipsModule, 
      MatListModule, 
      MatSidenavModule, 
      MatTabsModule, 
      MatProgressBarModule,
      MatCheckboxModule,
      MatSliderModule,
      MatRadioModule,
      MatDialogModule,
      MatGridListModule,
      BarRatingModule,
      FormsModule,
      ReactiveFormsModule,
      SlickCarouselModule
   ],
   declarations: [
      PageTitleComponent,
      ContactFormComponent,
      AboutInfoComponent,
      CommonSignInComponent,
      CommonForgotPasswordComponent,
      SourceKeyDialogComponent,
      CommonSignUpComponent,
      HeaderUserProfileDropdownComponent,
      AppLogoComponent,
      HomePageSliderComponent,
      ConfirmationPopupComponent,
      CommonSignUpComponent,
      DataObjectDialogComponent,
      AppLogoFixedComponent,
      LanguageDropDownComponent,
   ],
   exports: [
      PageTitleComponent,
      ContactFormComponent,
      AboutInfoComponent,
      CommonSignInComponent,
      CommonForgotPasswordComponent,
      SourceKeyDialogComponent,
      CommonSignUpComponent,
      HeaderUserProfileDropdownComponent,
      AppLogoComponent,
      AppLogoFixedComponent,
      HomePageSliderComponent,
      LanguageDropDownComponent
   ],
   entryComponents : [
      ConfirmationPopupComponent,
      SourceKeyDialogComponent,
      DataObjectDialogComponent
   ]
})
export class GlobalModule {}
