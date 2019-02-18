import { Component, AfterContentInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { AuthRouteGuard } from '../auth/auth-route.guard';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements AfterContentInit {
  authState: any;
  // including AuthGuardService here so that it's available to listen to auth events
  authService: AuthRouteGuard;
  amplifyService: AmplifyService;

  constructor(
    public events: Events,
    public guard: AuthRouteGuard,
    public amplify: AmplifyService
  ) {
    this.authState = { loggedIn: false };
    this.authService = guard;
    this.amplifyService = amplify;
    this.amplifyService.authStateChange$.subscribe(authState => {
      this.authState.loggedIn = authState.state === 'signedIn';
      this.events.publish('data:AuthState', this.authState);
    });
  }

  ngAfterContentInit(): void {
    this.events.publish('data:AuthState', this.authState);
  }
}
