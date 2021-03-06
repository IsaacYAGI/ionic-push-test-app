import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public fcm: FCM) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.fcm.getToken().then(token => {
        // Your best bet is to here store the token on the user's profile on the
        // Firebase database, so that when you want to send notifications to this
        // specific user you can do it from Cloud Functions.
        console.log(`DEVICE TOKEN=${JSON.stringify(token)}`);
        alert(`DEVICE TOKEN=${JSON.stringify(token)}`);
      });


      fcm.onNotification().subscribe( data => {
        if(data.wasTapped){
          //Notification was received on device tray and tapped by the user.
          alert(`DATA RECEIVED TAPPED=${JSON.stringify(data)}`);
        }else{
          alert(`DATA RECEIVED=${JSON.stringify(data)}`);
          //Notification was received in foreground. Maybe the user needs to be notified.
        }
      });

    });
  }
}
