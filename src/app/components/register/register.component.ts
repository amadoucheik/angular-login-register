import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {passwordMatchValidator} from "../../shared/password-match.directive";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = this.fb.group({

    firstName : ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    lastName : ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]

  },{
    validators: passwordMatchValidator
  })

  get firstName(){
    return this.registerForm.controls['firstName']
  }
  get lastName(){
    return this.registerForm.controls['lastName']
  }
  get email(){
    return this.registerForm.controls['email']
  }
  get password(){
    return this.registerForm.controls['password']
  }
  get confirmPassword(){
    return this.registerForm.controls['confirmPassword']
  }

  submitDetails(){
    console.log(this.registerForm.value)
  }

  constructor(private fb: FormBuilder) {}

  protected readonly passwordMatchValidator = passwordMatchValidator;

}
