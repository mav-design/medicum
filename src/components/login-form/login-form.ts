import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  private http = inject(HttpClient);

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });
  auth() {
    const authResult = this.http.post('/auth', this.loginForm.value).subscribe((responce) => {
      if (responce) alert('Welcome Home ');
    });

    console.warn(this.loginForm);
  }
}
