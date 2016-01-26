import {Page, NavController, NavParams, Alert, ActionSheet} from 'ionic/ionic';
import {BrokerDetailsPage} from '../broker-details/broker-details';
import * as propertyService from '../../services/property-service';
import * as favoriteService from '../../services/favorite-service';

@Page({
    templateUrl: 'build/pages/property-details/property-details.html'
})
export class PropertyDetailsPage {

    constructor(nav:NavController, navParams:NavParams) {
        this.nav = nav;
        // If we navigated to this page, we will have an property available as a nav param
        this.property = navParams.get('property');
    }

    favorite(event, property) {

        favoriteService.add(property).then(property => {
            let alert = Alert.create({
                title: 'Favorites',
                subTitle: 'Property added to your favorites',
                buttons: ['OK']
            });
            this.nav.present(alert);
        });

    }

    like(event, property) {

        propertyService.like(property.id).then(likes => {
            property.likes = likes;
        });

    }

    share(event, property) {
        let actionSheet = ActionSheet.create({
            buttons: [
                {
                    text: 'Text',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'Email',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Facebook',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Twitter',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.nav.present(actionSheet);
    }

    showBroker(event, broker) {
        this.nav.push(BrokerDetailsPage, {
            broker: broker
        });
    }

}