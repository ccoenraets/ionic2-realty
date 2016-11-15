import { FavoriteListPage } from './../pages/favorite-list/favorite-list';
import { BrokerDetailsPage } from './../pages/broker-details/broker-details';
import { BrokerListPage } from './../pages/broker-list/broker-list';
import { PropertyDetailsPage } from './../pages/property-details/property-details';
import { PropertyListPage } from './../pages/property-list/property-list';
import { PropertyService } from './../providers/property-service';
import { BrokerService } from './../providers/broker-service';
import { WelcomePage } from './../pages/welcome/welcome';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    PropertyListPage,
    PropertyDetailsPage,
    BrokerListPage,
    BrokerDetailsPage,
    FavoriteListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    PropertyListPage,
    PropertyDetailsPage,
    BrokerListPage,
    BrokerDetailsPage,
    FavoriteListPage
  ],
  providers: [BrokerService, PropertyService]
})
export class AppModule {}
