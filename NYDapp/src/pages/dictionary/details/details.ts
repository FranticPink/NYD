import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'details.html',
})
export class DetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}