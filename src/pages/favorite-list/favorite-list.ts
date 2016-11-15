import { PropertyDetailsPage } from './../property-details/property-details';
import { PropertyService } from './../../providers/property-service';
import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-favorite-list',
  templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {
  properties;
  selectedItem;

  constructor(private navCtrl: NavController, private navParams: NavParams, private propertyService: PropertyService) {
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    this.propertyService.getFavorites().subscribe(
      data => this.properties = data
    );
  }


  itemTapped(event, property) {
    this.navCtrl.push(PropertyDetailsPage, {
      property: property
    });
  }

  deleteItem(event, property) {
    this.propertyService.unfavorite(property).subscribe();
  }

}
