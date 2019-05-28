import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { User } from '../register/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User;
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
