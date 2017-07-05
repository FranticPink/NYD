import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-translate',
  templateUrl: 'translate.html'
})
export class TranslatePage {
  items: Array<{yuanwen: string, yiwen: string}>;
  constructor(public navCtrl: NavController) {
  this.items=[{
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },{
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },{
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  },
  {
    'yuanwen':'我爱你！',
    'yiwen':'I Love You!'
  }];
  }
openPage(item){

}
}