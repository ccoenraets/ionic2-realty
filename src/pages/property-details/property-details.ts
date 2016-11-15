import { BrokerDetailsPage } from './../broker-details/broker-details';
import { PropertyService } from './../../providers/property-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-property-details',
  templateUrl: 'property-details.html'
})
export class PropertyDetailsPage {
  property;

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private propertyService: PropertyService,
    private alertCtrl: AlertController, private actionSheetCtrl: ActionSheetController) {
    this.property = navParams.get('property');
  }

  favorite(event, property) {
    this.propertyService.favorite(property).subscribe(
      property => {
        let alert = this.alertCtrl.create({
          title: 'Favorites',
          subTitle: 'Property added to your favorites',
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }

  like(event, property) {
    this.propertyService.like(property).subscribe(
      likes => {
        property.likes = likes;
      }
    );
  }

  share(event, property) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share',
      buttons: [
        {
          text: 'Text',
          handler: () => {
            console.log('Text clicked');
          }
        },
        {
          text: 'Email',
          handler: () => {
            console.log('Email clicked');
          }
        },
        {
          text: 'Facebook',
          handler: () => {
            console.log('Facebook clicked');
          }
        },
        {
          text: 'Twitter',
          handler: () => {
            console.log('Twitter clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  showBroker(event, broker) {
    this.navCtrl.push(BrokerDetailsPage, {
      broker: broker
    });
  }

}
