import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  accountPages: any[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

    this.accountPages = [
      {
        title: 'Perfil',
        url: '/perfil',
        icon: 'contact'
      },
      {
        title: 'Mis Intereses',
        url: '/intereses',
        icon: 'heart'
      },
      {
        title: 'Historial',
        url: '/historial',
        icon: 'timer'
      }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
