import {Page, NavController, NavParams} from 'ionic/ionic';
import {PropertyDetailsPage} from '../property-details/property-details';
import * as propertyService from '../../services/property-service';

@Page({
    templateUrl: 'build/pages/property-list/property-list.html'
})
export class PropertyListPage {

    constructor(nav:NavController, navParams:NavParams) {
        this.nav = nav;

        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');

        propertyService.findAll().then(data => this.properties = data);
    }

    itemTapped(event, property) {
        this.nav.push(PropertyDetailsPage, {
            property: property
        });
    }

}