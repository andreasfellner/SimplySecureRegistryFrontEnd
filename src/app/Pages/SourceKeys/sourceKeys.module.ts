
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { NgAisModule } from 'angular-instantsearch';
import { SourceKeyRoutes } from './sourceKeys.routing';

import { MatPaginatorModule } from '@angular/material/paginator';
import { GlobalModule } from '../../Global/Global.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTreeModule} from '@angular/material/tree';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';


import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSortModule,
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

import { SourceKeyComponent } from './SourceKeys/sourceKeys.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SourceKeyRoutes),
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
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
    MatPaginatorModule,
    GlobalModule,
    //NgAisModule,

    A11yModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTreeModule,
    GridAllModule,
    
  ],
  declarations: [
    SourceKeyComponent
  ],
  providers: [
    
  ]
  
})

export class SourceKeyModule { }
