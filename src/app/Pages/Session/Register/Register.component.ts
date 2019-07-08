import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'aipoma-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm  : FormGroup;
  emailPattern : any = /\S+@\S+\.\S+/;

  constructor(private apiService: ApiService,
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

  public OnSubmit()
  {
    console.log('submit');
    //apiService
  }
}
