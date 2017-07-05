import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Login } from "../login/login";
import { SettingPage } from "./user/setting/setting";
import { GradePage } from "./user/grade/grade";
import { ExtensionPage } from "./user/extension/extension";

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
    showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
openPage(){
this.navCtrl.push(Login);

}
openSettingPage(){
  this.navCtrl.push(SettingPage);
}
opengradePage(){
  this.navCtrl.push(GradePage);
}
openextensionPage(){
  this.navCtrl.push(ExtensionPage);
}
}