import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {BrokerService} from '../../services/broker-service';

@Page({
    templateUrl: 'build/pages/broker-details/broker-details.html'
})
export class BrokerDetailsPage {

    static get parameters() {
        return [[NavController], [NavParams], [BrokerService]];
    }

    constructor(nav, navParams, brokerService) {
        this.brokerService = brokerService;
        this.broker = navParams.get('broker');
    }

    ngOnInit() {
        this.brokerService.findById(this.broker.id).subscribe(
            broker => this.broker = broker
        );
    }


}
