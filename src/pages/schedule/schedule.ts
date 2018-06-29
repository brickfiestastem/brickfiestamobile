import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScheduledetailPage } from '../scheduledetail/scheduledetail';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  items: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    for(let i = 0; i < 10; i++) {
      this.items.push({
        text: 'Item ' + i,
        id: i
      });
    }
  }

  itemSelected(item) {
    this.navCtrl.push(ScheduledetailPage, {
      item: item
    });
  }

}
