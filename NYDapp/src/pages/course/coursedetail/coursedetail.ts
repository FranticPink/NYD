import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'coursedetail.html',
})
export class CoursedetailPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}