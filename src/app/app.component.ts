import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { AuthClass } from 'aws-amplify';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Events, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  private auth: AuthClass;
  authState: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public amplifyService: AmplifyService,
    public navCtrl: NavController,
    public events: Events,
  ) {
    this.initializeApp();
    this.authState = { loggedIn: false };
    this.auth = this.amplifyService.auth();

    this.amplifyService.authStateChange$.subscribe(authState => {
      console.log(authState);
      this.authState.loggedIn = authState.state === 'signedIn';
      this.events.publish('data:AuthState', this.authState);
      if (this.authState.loggedIn) {
        this.navCtrl.navigateForward('/tabs/(home:home)');
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
