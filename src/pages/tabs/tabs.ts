import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { SigninPage } from '../signin/signin';
import { SchedulePage } from '../schedule/schedule';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SigninPage;
  tab3Root = SchedulePage;
  tab4Root = MapPage;
  tab5Root = ContactPage;
  tab6Root = AboutPage;

  constructor() {

  }
}
