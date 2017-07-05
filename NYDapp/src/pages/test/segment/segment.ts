import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html'
})
export class SegmentPage {
  segmentsArray = ['segmentOne','segmentTwo','segmentThree'];
  segmentModel: string = this.segmentsArray[0];
  constructor(public navCtrl: NavController) {
  }

swipeEvent(event){
  //向左滑
if(event.direction==2){
    console.log("右划");

  if(this.segmentsArray.indexOf(this.segmentModel)<2){
this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel)+1];
  }
}
//向右滑
if(event.direction==4){
     console.log("左划");
    
  if(this.segmentsArray.indexOf(this.segmentModel)>0){
this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel)-1];
  }
}
}
tan(){
console.log("anzhu");
}
}
