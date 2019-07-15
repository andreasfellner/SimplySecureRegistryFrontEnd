import { Component, OnInit } from '@angular/core';
import { ApiService, AppService } from '../../services/services';
import { SourceKey } from '../../services/models';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-SourceKeyDialog',
  templateUrl: './SourceKeyDialog.component.html',
  styleUrls: ['./SourceKeyDialog.component.scss']
})
export class SourceKeyDialogComponent implements OnInit {

  sourceKeyForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(public dialogRef: MatDialogRef<SourceKeyDialogComponent>,
    private formGroup: FormBuilder,
    private apiService: ApiService,
    public appService: AppService) {


  }

  ngOnInit() {
    this.sourceKeyForm = this.formGroup.group({
      sourceKey: ['', { validators: [Validators.required] }],
      device: ['', { validators: [Validators.required] }],
      deviceName: ['', { validators: [Validators.required] }],
      application: ['', { validators: [Validators.required] }],
      applicationName: ['', { validators: [Validators.required] }]
    })
  }

  get f() { return this.sourceKeyForm.controls; }

  public onSubmit() {

    this.submitted = true;

    if(this.sourceKeyForm.valid)
    {
       console.log(this.sourceKeyForm.value);
       this.loading = true;

      let sourceKey: SourceKey = new SourceKey;

      console.log('this.f.sourceKey.value',this.f.sourceKey.value);

      sourceKey.sssk = this.f.sourceKey.value;
      sourceKey.ssrd = this.f.device.value;
      sourceKey.ssrd_name = this.f.deviceName.value;
      sourceKey.ssra = this.f.application.value;
      sourceKey.ssra_name = this.f.applicationName.value;
      sourceKey.ssru = this.apiService.currentUserValue.email;

       this.apiService.addSourceKey(sourceKey)
            .pipe(first())
            .subscribe(
              result => {
                
                this.loading = false;
                this.dialogRef.close();
                console.log('SourceKeyDialog result',result);

                if(result.success == true)
                {                  
                  this.apiService.getSourceKeys();
                }
                else{
                  
                  let message = result.error;
                  console.log('message', message);
                  this.appService.confirmationPopup(message);
                }

              });
    } 
    else
    {
       for (let i in this.sourceKeyForm.controls) {
          this.sourceKeyForm.controls[i].markAsTouched();
       }
    }

  }


}
