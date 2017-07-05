import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoursedetailPage } from "./coursedetail/coursedetail";
import { TestPage } from "../test/test";

@Component({
  selector: 'page-course',
  templateUrl: 'course.html'
})
export class CoursePage {
  transrate: number;
  items:Array<{coursename:string,courseteacher:string,description :string,
  alltime:string,syllabus:string,startime:string,endtime:string,count:string}>;
  constructor(public navCtrl: NavController,public nav: NavController) {
    this.items=[{
      'coursename':'暑假美式口语狂欢夜',
      'courseteacher':'周扒皮',
      'description':'从发音零基础到流利口语开口即说',
      'alltime':'2',
      'syllabus':'1.基础；2进阶',
      'startime':'2017-7-4 20：00',
      'endtime':'2017-7-20 23：59',
      'count':'1888'
    },{
      'coursename':'暑假美式口语狂欢夜',
      'courseteacher':'周扒皮',
      'description':'从发音零基础到流利口语开口即说',
      'alltime':'2',
      'syllabus':'1.基础；2进阶',
      'startime':'2017-7-4 20：00',
      'endtime':'2017-7-20 23：59',
      'count':'1888'
    },{
      'coursename':'暑假美式口语狂欢夜',
      'courseteacher':'周扒皮',
      'description':'从发音零基础到流利口语开口即说',
      'alltime':'2',
      'syllabus':'1.基础；2进阶',
      'startime':'2017-7-4 20：00',
      'endtime':'2017-7-20 23：59',
      'count':'1888'
    },{
      'coursename':'暑假美式口语狂欢夜',
      'courseteacher':'周扒皮',
      'description':'从发音零基础到流利口语开口即说',
      'alltime':'2',
      'syllabus':'1.基础；2进阶',
      'startime':'2017-7-4 20：00',
      'endtime':'2017-7-20 23：59',
      'count':'1888'
    },{
      'coursename':'暑假美式口语狂欢夜',
      'courseteacher':'周扒皮',
      'description':'从发音零基础到流利口语开口即说',
      'alltime':'2',
      'syllabus':'1.基础；2进阶',
      'startime':'2017-7-4 20：00',
      'endtime':'2017-7-20 23：59',
      'count':'1888'
    },{
      'coursename':'暑假美式口语狂欢夜',
      'courseteacher':'周扒皮',
      'description':'从发音零基础到流利口语开口即说',
      'alltime':'2',
      'syllabus':'1.基础；2进阶',
      'startime':'2017-7-4 20：00',
      'endtime':'2017-7-20 23：59',
      'count':'1888'
    },{
      'coursename':'暑假美式口语狂欢夜',
      'courseteacher':'周扒皮',
      'description':'从发音零基础到流利口语开口即说',
      'alltime':'2',
      'syllabus':'1.基础；2进阶',
      'startime':'2017-7-4 20：00',
      'endtime':'2017-7-20 23：59',
      'count':'1888'
    },{
      'coursename':'暑假美式口语狂欢夜',
      'courseteacher':'周扒皮',
      'description':'从发音零基础到流利口语开口即说',
      'alltime':'2',
      'syllabus':'1.基础；2进阶',
      'startime':'2017-7-4 20：00',
      'endtime':'2017-7-20 23：59',
      'count':'1888'
    },{
      'coursename':'暑假美式口语狂欢夜',
      'courseteacher':'周扒皮',
      'description':'从发音零基础到流利口语开口即说',
      'alltime':'2',
      'syllabus':'1.基础；2进阶',
      'startime':'2017-7-4 20：00',
      'endtime':'2017-7-20 23：59',
      'count':'1888'
    },{
      'coursename':'暑假美式口语狂欢夜',
      'courseteacher':'周扒皮',
      'description':'从发音零基础到流利口语开口即说',
      'alltime':'2',
      'syllabus':'1.基础；2进阶',
      'startime':'2017-7-4 20：00',
      'endtime':'2017-7-20 23：59',
      'count':'1888'
    }];
  }
detail(item){
    this.nav.push(CoursedetailPage,{ item: item });
}
  onScroll($event: any) {

    let scrollTop = $event.scrollTop;
    //document.getElementById("ww").style.backgroundColor="white";
         // document.getElementById("ww").style.opacity="0";
    
    if(scrollTop==0){
       //document.getElementById("ww").style.fillOpacity="0";
    }
    else{
      //document.getElementById("ww").style.backgroundColor="#fff";
    }
     
  }
  openPage(){

      this.nav.push(TestPage);
  }
     　　


  
}