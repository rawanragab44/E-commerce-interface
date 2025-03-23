import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#])[A-Za-z\d*@%$#]{8,20}$/)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }




// Custom validator to check if passwords match
passwordMatchValidator(form: FormGroup): ValidationErrors | null {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}




 
           
    onSubmit(){
      if (this.registerForm.valid) {
        console.log('Form Submitted', this.registerForm.value);
      } else {
        this.registerForm.markAllAsTouched();
      }
    };

}