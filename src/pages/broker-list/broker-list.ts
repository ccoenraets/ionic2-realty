import { BrokerDetailsPage } from './../broker-details/broker-details';
import { BrokerService } from './../../providers/broker-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-broker-list',
  templateUrl: 'broker-list.html'
})
export class BrokerListPage {
  selectedItem;
  brokers;

  constructor(private navCtrl: NavController, private navParams: NavParams, private brokerService: BrokerService) {
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    this.brokerService.findAll().subscribe(
      data => this.brokers = data
    );
  }

  itemTapped(event, broker) {
    this.navCtrl.push(BrokerDetailsPage, {
      broker: broker
    });
  }
}
