import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from "../test/test";

@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html'
})
export class DiscoveryPage {

  constructor(public navCtrl: NavController) {

  }
openPage(){
  this.navCtrl.push(TestPage);
}
}