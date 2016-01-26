import {Page, NavController, NavParams} from 'ionic/ionic';

import * as brokerService from '../../services/broker-service';

@Page({
    templateUrl: 'build/pages/broker-details/broker-details.html'
})
export class BrokerDetailsPage {

    constructor(nav:NavController, navParams:NavParams) {
        this.broker = navParams.get('broker');
        brokerService.findById(this.broker.id).then(broker => this.broker = broker);
    }

}
