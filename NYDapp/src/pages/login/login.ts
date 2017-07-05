import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login{
constructor(public alertCtrl: AlertController){

}
login(){
    let alert = this.alertCtrl.create({
      title: '登录说明',
      subTitle: '由于没有连接数据库，暂时不提供此功能！',
      buttons: ['OK']
    });
    alert.present();
}
}