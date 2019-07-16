import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { NgAisModule } from 'angular-instantsearch';
import { DataObjectRoutes } from './dataObject.routing';

import { MatPaginatorModule } from '@angular/material/paginator';
import { GlobalModule } from '../../Global/Global.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTreeModule } from '@angular/material/tree';

import { TreeGridModule, PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid';
import { AngularTreeGridModule } from 'angular-tree-grid';

import { FormsModule } from '@angular/forms';
import { GridModule, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';

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

import { DataObjectComponent } from './DataObject/dataObject.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DataObjectRoutes),
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
    TreeGridModule,
    AngularTreeGridModule,
    GridAllModule,
    FormsModule,
    GridModule,
    DatePickerAllModule
    
  ],
  declarations: [
    DataObjectComponent
  ],
  providers: [
    PageService, SortService, FilterService, EditService, ToolbarService, SortService
  ]

})

export class DataObjectModule { }
