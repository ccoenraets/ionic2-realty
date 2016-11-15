import { BrokerService } from './../../providers/broker-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-broker-details',
  templateUrl: 'broker-details.html'
})
export class BrokerDetailsPage {

  broker;

  constructor(private navCtrl: NavController, private navParams: NavParams, private brokerService: BrokerService) {
    this.broker = navParams.get('broker');
  }

}
