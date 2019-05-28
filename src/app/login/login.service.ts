import { Injectable } from '@angular/core';
import { USERS } from '../users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users = USERS;
  user;
  constructor() { }

  findUser(email: string, password: string) {
    this.user = this.users.find(x => x.email === email);
    if (this.user.password === password) {
      return true;
    } else { return false; }
  }
}
