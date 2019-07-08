import { Component, OnInit } from '@angular/core';
import { ApiService, AipomaService } from '../../services/services';
import { DataObject } from '../../services/models';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-DataObjectDialog',
  templateUrl: './DataObjectDialog.component.html',
  styleUrls: ['./DataObjectDialog.component.scss']
})
export class DataObjectDialogComponent implements OnInit {

  dataObjectForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(public dialogRef: MatDialogRef<DataObjectDialogComponent>,
    private formGroup: FormBuilder,
    private apiService: ApiService,
    public aipomaService: AipomaService) {


  }

  ngOnInit() {
    this.dataObjectForm = this.formGroup.group({
      object: ['', { validators: [Validators.required] }],
      objectName: ['', { validators: [Validators.required] }],
      objectDataType: ['', { validators: [Validators.required] }],
      objectSensitivity: ['', { validators: [Validators.required] }],
      objectHashValue: ['', { validators: [Validators.required] }]
    })
  }

  get f() { return this.dataObjectForm.controls; }

  public onSubmit() {

    this.submitted = true;

    if (this.dataObjectForm.valid) {
      console.log(this.dataObjectForm.value);
      this.loading = true;

      let dataObject: DataObject = new DataObject;
      dataObject.ssro = this.f.object.value;
      dataObject.ssro_name = this.f.objectName.value;
      dataObject.ssro_data_object_type = this.f.objectDataType.value;
      dataObject.ssros = this.f.objectSensitivity.value;
      dataObject.ssro_hash_value = this.f.objectHashValue.value;
      dataObject.ssru = this.apiService.currentUserValue.email;

      this.apiService.addDataObject(dataObject)
        .pipe(first())
        .subscribe(
          result => {

            this.dialogRef.close();
            console.log('DataObjectDialog result', result);

            if (result.success == true) {
              

            }
            else {
              
              let message = result.error;
              console.log('message', message);
              this.aipomaService.confirmationPopup(message);
            }

            this.loading = false;
          });
    }
    else {
      for (let i in this.dataObjectForm.controls) {
        this.dataObjectForm.controls[i].markAsTouched();
      }
    }

  }



}
