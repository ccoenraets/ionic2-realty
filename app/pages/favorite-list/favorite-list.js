import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {PropertyDetailsPage} from '../property-details/property-details';
import {PropertyService} from '../../services/property-service';

@Page({
    templateUrl: 'build/pages/favorite-list/favorite-list.html'
})
export class FavoriteListPage {

    static get parameters() {
        return [[NavController], [NavParams], [PropertyService]];
    }

    constructor(nav, navParams, propertyService) {
        this.nav = nav;
        this.propertyService = propertyService;
        this.selectedItem = navParams.get('item');
    }

    ngOnInit() {
        this.propertyService.getFavorites().subscribe(
            data => this.properties = data
        );
    }

    itemTapped(event, property) {
        this.nav.push(PropertyDetailsPage, {
            property: property
        });
    }

    deleteItem(event, property) {
        this.propertyService.unfavorite(property).subscribe();
    }

}