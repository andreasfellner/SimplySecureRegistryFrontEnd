import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, 
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
         MatGridListModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ToastaModule } from 'ngx-toasta';
import { BidiModule } from '@angular/cdk/bidi';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutes } from './app-routing';
import { GlobalModule } from './Global/Global.module';
import { MenuItems } from './Core/menu/menu-items/menu-items';

import { AppService } from './services/services';

import { AppComponent } from './app.component';
import { MainComponent } from './Main/Main.component';
import { HeaderComponent } from './Layouts/Header/Header/Header.component';
import { FooterComponent } from './Layouts/Footer/Footer.component';
import { MenuComponent } from './Layouts/Menu/Menu/Menu.component';
import { SideBarMenuComponent } from './Layouts/Menu/SidebarMenu/SidebarMenu.component';
import { FixedHeaderComponent } from './Layouts/Header/FixedHeader/FixedHeader.component';
import { TreeGridModule, PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/********** Custom option for ngx-translate ******/
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SideBarMenuComponent,
    FixedHeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'app-seo-pre'}),
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {onSameUrlNavigation: 'reload'}),
    GlobalModule,
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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingBarRouterModule,
    LoadingBarModule.forRoot(),
    ToastaModule.forRoot(),
    BidiModule,
    SlickCarouselModule,
    TreeGridModule,
    TranslateModule.forRoot({
      loader: {
         provide: TranslateLoader,
         useFactory: createTranslateLoader,
         deps: [HttpClient]
      }
   }),
  ],
   providers: [
      MenuItems,
      AppService,
      PageService,
      SortService,
      FilterService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
