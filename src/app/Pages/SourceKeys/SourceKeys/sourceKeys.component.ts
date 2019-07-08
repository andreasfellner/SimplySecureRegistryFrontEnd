
import { Component, OnInit, ViewChild } from '@angular/core';
import { SourceKeyService, AipomaService } from 'src/app/services/services';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { SourceKeyDialogComponent } from 'src/app/Global/SourceKeyDialog/SourceKeyDialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-SourceKey',
  templateUrl: './sourceKeys.component.html',
  styleUrls: ['./sourceKeys.component.scss']
})
export class SourceKeyComponent implements OnInit {

  public data: object[];
  @ViewChild('grid' , { static: false }) public grid: GridComponent;

  constructor(private sourceKeyService: SourceKeyService,
              private aipomaService: AipomaService,
              private dialog: MatDialog)
  {

  }
  
  ngOnInit() {
    this.updateInfo();
    this.sourceKeyService.eventDataUpdated.subscribe(value => {
      if (value == true) {
        this.updateInfo();
      }
    });
  }

  public updateInfo() {

    this.data = this.sourceKeyService.getData();
  }

  public addSourceKey()
  {
    let columnSelectorPopup: MatDialogRef<SourceKeyDialogComponent>;
    columnSelectorPopup = this.dialog.open(SourceKeyDialogComponent);
    return columnSelectorPopup.afterClosed();
  }

}


