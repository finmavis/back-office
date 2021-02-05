import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { User } from '../models/user';

import { COOKIES } from '../shared/constants/cookies';
import { CREDENTIALS } from '../shared/constants/credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService, private router: Router) {}

  public get isAuthenticated(): boolean {
    const isTokenExists = this.cookieService.check(COOKIES.token);
    if (!isTokenExists) {
      return false;
    }

    const userToken = this.cookieService.get(COOKIES.token);
    const userDataInCookie = JSON.parse(this.decoded(userToken)) as User;
    const user = this.getUserFromCredentials(userDataInCookie);
    if (!user) {
      this.logout();
      return false;
    }
    return user !== undefined;
  }

  public login(username: string, password: string): void {
    const user = this.getUserFromCredentials({ username, password });
    if (!user) {
      throw new Error('ACCOUNT_NOT_FOUND');
    }

    const stringifyUser = JSON.stringify(user);
    const expiresAt = new Date();
    expiresAt.setMonth(expiresAt.getMonth() + 1);
    this.cookieService.set(COOKIES.token, this.encode(stringifyUser), {
      expires: expiresAt,
    });
  }

  public logout() {
    this.cookieService.delete(COOKIES.token);
    this.router.navigate(['/login']);
  }

  private encode(value: string) {
    return btoa(unescape(encodeURIComponent(value)));
  }

  private decoded(value: string) {
    return decodeURIComponent(escape(atob(value)));
  }

  private getUserFromCredentials(user: User): User | undefined {
    return CREDENTIALS.find(
      (account) =>
        account.username === user.username && account.password === user.password
    );
  }
}
