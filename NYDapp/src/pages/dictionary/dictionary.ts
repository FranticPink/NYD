import { Component } from '@angular/core';

import { NavController } from 'ionic-angular'; 
import { DetailsPage } from "./details/details";
@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html'
})
export class DictionaryPage {
  transrate: number;
  columnaArray = ['1','2','3','4','5'];
  columnaModel: string = this.columnaArray[0];
  items: Array<{title: string, description: string, img: string}>;
  constructor(public navCtrl: NavController,public nav: NavController) {
     this.transrate=0;
    this.items = [
      {
        'title': 'Angular',
        'img': '../../assets/img/1.jpg',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.'
      },
      {
        'title': 'CSS3',
        'img': '../../assets/img/1.jpg',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!'
      },
      {
        'title': 'HTML5',
        'img': '../../assets/img/1.jpg',
        'description': 'The latest version of the web\'s markup language.'
      },
      {
        'title': 'JavaScript',
        'img': '../../assets/img/1.jpg',
        'description': 'One of the most popular programming languages on the Web!'
      },
      {
        'title': 'Sass',
        'img': '../../assets/img/1.jpg',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.'
      },
      {
        'title': 'NodeJS',
        'img': '../../assets/img/1.jpg',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.'
      },
      {
        'title': 'Python',
        'img': '../../assets/img/1.jpg',
        'description': 'A clear and powerful object-oriented programming language!'
      },
      {
        'title': 'Markdown',
        'img': '../../assets/img/1.jpg',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.'
      },
      {
        'title': 'Tux',
        'img': '../../assets/img/1.jpg',
        'description': 'The official mascot of the Linux kernel!'
      },
    ]
  }

  onScroll($event: any) {

    let scrollTop = $event.scrollTop;
    console.log(scrollTop);
    this.transrate=scrollTop/200;
     if(this.columnaArray.indexOf(this.columnaModel)==0){
        document.getElementById("seg").style.backgroundColor="white";
        document.getElementById("seg").style.opacity=this.transrate.toString();
     }

    

  }

　// 

openPage(item:any){
  this.nav.push(DetailsPage, { item: item });

}
swipeEvent(event){
  
 document.getElementById("seg").style.opacity=('1').toString();
  //向左滑
  if(event.direction==2){
        console.log("左划");

      if(this.columnaArray.indexOf(this.columnaModel)<4){
      this.columnaModel = this.columnaArray[this.columnaArray.indexOf(this.columnaModel)+1];
        }
      }
    //向右滑
      if(event.direction==4){
          console.log("右划");
          
        if(this.columnaArray.indexOf(this.columnaModel)>0){
      this.columnaModel = this.columnaArray[this.columnaArray.indexOf(this.columnaModel)-1];
      }
    }
    if(this.columnaArray.indexOf(this.columnaModel)==0)
    {
      document.getElementById("content").style.marginTop = ('-38px').toString();
      document.getElementById("seg").style.opacity=this.transrate.toString();
    }
    else{
      document.getElementById("content").style.marginTop = ('0').toString();
    }
  }
}