import { Component, OnInit, ViewChild } from '@angular/core';
import { AipomaService, DataObjectService } from 'src/app/services/services';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DataObjectDialogComponent } from 'src/app/Global/DataObjectDialog/DataObjectDialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';


@Component({
  selector: 'app-DataObject',
  templateUrl: './dataObject.component.html',
  styleUrls: ['./dataObject.component.scss']
})
export class DataObjectComponent implements OnInit {

  public data: object[];
  @ViewChild('grid' , { static: false }) public grid: GridComponent;

  constructor(private dataObjectService: DataObjectService,
              private aipomaService: AipomaService,
    private dialog: MatDialog) {

  }
  
  ngOnInit() {
    this.updateInfo();
    this.dataObjectService.eventDataUpdated.subscribe(value => {
      if (value == true) {
        this.updateInfo();
      }
    });
  }

  public updateInfo() {

    this.data = this.dataObjectService.getData();
  }

  public addDataObject()
  {
    let columnSelectorPopup: MatDialogRef<DataObjectDialogComponent>;
    columnSelectorPopup = this.dialog.open(DataObjectDialogComponent);
    return columnSelectorPopup.afterClosed();
  }

}
