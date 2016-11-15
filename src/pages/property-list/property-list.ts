import { PropertyDetailsPage } from './../property-details/property-details';
import { PropertyService } from './../../providers/property-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-property-list',
  templateUrl: 'property-list.html'
})
export class PropertyListPage {
  selectedItem = null;
  properties = null;

  constructor(public navCtrl: NavController, private propertyService: PropertyService, private navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    this.propertyService.findAll().subscribe(
      data => this.properties = data
    );
  }

  itemTapped(event, property) {
    this.navCtrl.push(PropertyDetailsPage, {
      property: property
    });
  }
}
