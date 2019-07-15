import { Component, OnInit } from '@angular/core';
import { ApiService, AppService } from '../../services/services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-SignUp',
  templateUrl: './CommonSignUp.component.html',
  styleUrls: ['./CommonSignUp.component.scss']
})
export class CommonSignUpComponent implements OnInit {

  registerForm  : FormGroup;
  emailPattern : any = /\S+@\S+\.\S+/;

  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private apiService: ApiService,
              private appService: AppService,
              private router: Router,
              private formGroup : FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formGroup.group({

      firstName: ['', { validators: [Validators.required] }],
      lastName : ['', { validators: [Validators.required] }],

      email      : ['', { validators: [Validators.required, Validators.pattern(this.emailPattern)] }],
      password   : ['', { validators: [Validators.required] }],
      confirmPassword: ['', { validators: [Validators.required] }]
      
    })
  }

  get f() { return this.registerForm.controls; }

  public onSubmit() {
    
    this.submitted = true;

    this.returnUrl = "/session/signin";

    if(this.registerForm.valid)
    {
       console.log(this.registerForm.value);
       this.loading = true;

       this.apiService.register(this.f.firstName.value, this.f.lastName.value, this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                result => {
                  this.loading = false;
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
                });
    } 
    else
    {
       for (let i in this.registerForm.controls) {
          this.registerForm.controls[i].markAsTouched();
       }
    }
  }
}
