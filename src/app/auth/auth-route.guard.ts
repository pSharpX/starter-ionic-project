import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Events } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuard implements CanActivate {
  signedIn = false;

  constructor(public router: Router, public events: Events) {
    this.events.subscribe('data:AuthState', async data => {
      if (data.loggedIn) {
        this.signedIn = true;
      } else {
        this.signedIn = false;
      }
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.signedIn) {
      this.router.navigate(['/auth/login']);
    }
    return this.signedIn;
  }
}
