import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Events, NavController } from '@ionic/angular';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentInit {
  authState: any;

  constructor(
    public events: Events,
    public amplifyService: AmplifyService,
    public router: Router,
    public navCtrl: NavController
  ) {
    this.authState = { loggedIn: false };

    this.amplifyService.authStateChange$.subscribe(authState => {
      this.authState.loggedIn = authState.state === 'signedIn';
      this.events.publish('data:AuthState', this.authState);
    });
  }

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.events.publish('data:AuthState', this.authState);
  }

  showDecks() {
    // this.router.navigateByUrl('/tabs/(home:home)');
    this.navCtrl.navigateForward('/tabs/(home:home)');
  }
}
