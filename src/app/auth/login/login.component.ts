import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Events, NavController } from '@ionic/angular';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import { AuthClass } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentInit {
  private auth: AuthClass;
  authState: any;
  username: string;
  password: string;

  constructor(
    public events: Events,
    public amplifyService: AmplifyService,
    public router: Router,
    public navCtrl: NavController
  ) {
    this.authState = { loggedIn: false };
    this.auth = this.amplifyService.auth();

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

  signUp() {
    this.auth.signIn(this.username, this.password)
      .then(user => console.log(user))
      .catch(err => console.log(err));
  }

  signIn() {}
}
