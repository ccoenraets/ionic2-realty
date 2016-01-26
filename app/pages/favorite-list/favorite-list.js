import {Page, NavController, NavParams} from 'ionic/ionic';
import {PropertyDetailsPage} from '../property-details/property-details';
import * as favoriteService from '../../services/favorite-service';

@Page({
    templateUrl: 'build/pages/favorite-list/favorite-list.html'
})
export class FavoriteListPage {

    constructor(nav:NavController, navParams:NavParams) {
        this.nav = nav;

        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');

        favoriteService.findAll().then(data => this.properties = data);
    }

    itemTapped(event, property) {
        this.nav.push(PropertyDetailsPage, {
            property: property
        });
    }

    deleteItem(event, property) {
        favoriteService.deleteItem(property);
    }

}