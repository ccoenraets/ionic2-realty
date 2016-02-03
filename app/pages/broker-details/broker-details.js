import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams} from 'ionic/ionic';
import {BrokerService} from '../../services/broker-service';

@Page({
    templateUrl: 'build/pages/broker-details/broker-details.html'
})
export class BrokerDetailsPage {

    constructor(nav:NavController, navParams:NavParams, brokerService:BrokerService) {
        this.brokerService = brokerService;
        this.broker = navParams.get('broker');
    }

    ngOnInit() {
        this.brokerService.findById(this.broker.id).subscribe(
            broker => this.broker = broker
        );
    }


}
