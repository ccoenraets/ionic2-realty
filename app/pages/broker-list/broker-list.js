import {Page, NavController, NavParams} from 'ionic/ionic';
import {BrokerDetailsPage} from '../broker-details/broker-details';
import * as brokerService from '../../services/broker-service';

@Page({
    templateUrl: 'build/pages/broker-list/broker-list.html'
})
export class BrokerListPage {

    constructor(nav:NavController, navParams:NavParams) {
        this.nav = nav;

        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');

        brokerService.findAll().then(data => this.brokers = data);
    }

    itemTapped(event, broker) {
        this.nav.push(BrokerDetailsPage, {
            broker: broker
        });
    }

}