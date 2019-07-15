import { Component, OnInit } from '@angular/core';
import { ApiService, AppService } from '../../services/services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-CommonForgotPassword',
  templateUrl: './CommonForgotPassword.component.html',
  styleUrls: ['./CommonForgotPassword.component.scss']
})
export class CommonForgotPasswordComponent implements OnInit {

  forgotForm  : FormGroup;

  emailPattern : any = /\S+@\S+\.\S+/;
  returnUrl: string;
  loading = false;
  submitted = false;
  
  constructor(private formGroup : FormBuilder,
    private router: Router,
    private apiService: ApiService,
    public appService : AppService)
    {
     
      if (this.apiService.currentUserValue) { 
         this.router.navigate(['/']);
      }
    }

    ngOnInit() {
      this.forgotForm = this.formGroup.group({
        email      : ['', { validators: [Validators.required, Validators.pattern(this.emailPattern)] }],
        password   : ['', { validators: [Validators.required] }],
        keep       : [false,{validators:[Validators.required]}]
      })

      this.returnUrl = "/";
  }
  
  get f() { return this.forgotForm.controls; }

  public onSubmit() {
    
    this.submitted = true;

    if(this.forgotForm.valid)
    {
       console.log(this.forgotForm.value);
       this.loading = true;
       this.apiService.login(this.f.email.value, this.f.password.value, this.f.keep.value)
            .pipe(first())
            .subscribe(
              result => {
                
                if(result.success == true)
                {
                  console.log('result',result);
                  this.router.navigate([this.returnUrl]);
                }
                else{
                  console.log('result',result);
                  let message = result.error;
                  console.log('message', message);
                  this.appService.confirmationPopup(message);
                }

                this.loading = false;
              });
    } 
    else
    {
       for (let i in this.forgotForm.controls) {
          this.forgotForm.controls[i].markAsTouched();
       }
    }
  }

}
