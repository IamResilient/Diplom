import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { User } from '../register/user';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User;

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit(){
    alert(JSON.stringify(this.form.value));
  }

  constructor(
    private service: LoginService,
    private router: Router
    ) { }

  ngOnInit() {}

  goNext(email: string, password: string): void {
    if (this.service.findUser(email, password)) {
      this.router.navigate(['/scanner']);
    }
  }
}
