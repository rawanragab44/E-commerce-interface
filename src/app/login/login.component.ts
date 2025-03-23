import { Component } from '@angular/core';
import {FormsModule}from '@angular/forms'
import { RouterLink ,RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formValues = {
    email: '',
    password: ''
  }
  submitted: boolean = false;

   handleSubmitForm(form : any){
    this.submitted = true;
    if (!this.formValues.email || !this.formValues.password) {
      console.log("invaild informatio")
      return;
    }


    console.log('Form Submitted', { email: this.formValues.email, password: this.formValues.password });

   }
}
