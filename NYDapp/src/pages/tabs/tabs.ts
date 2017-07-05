import { Component } from '@angular/core';


import { DictionaryPage } from "../dictionary/dictionary";
import { TranslatePage } from "../translate/translate";
import { CoursePage } from "../course/course";
import { DiscoveryPage } from "../discovery/discovery";
import { UserPage } from "../user/user";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DictionaryPage;
  tab2Root = TranslatePage;
  tab3Root = CoursePage;
  tab4Root = DiscoveryPage;
  tab5Root = UserPage;
  constructor() {

  }
}
