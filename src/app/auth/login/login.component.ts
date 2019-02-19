import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authState: any;

  constructor(
    public events: Events,
    public amplifyService: AmplifyService,
    public router: Router
  ) {
    this.authState = { loggedIn: false };

    this.amplifyService.authStateChange$.subscribe(authState => {
      this.authState.loggedIn = authState.state === 'signedIn';
      this.events.publish('data:AuthState', this.authState);
    });
  }

  ngOnInit() {}

  showDecks() {
    this.router.navigate(['/home']);
  }
}
