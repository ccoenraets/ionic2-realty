import {App, IonicApp, Platform} from 'ionic/ionic';
import {PropertyListPage} from './pages/property-list/property-list';
import {BrokerListPage} from './pages/broker-list/broker-list';
import {FavoriteListPage} from './pages/favorite-list/favorite-list';
import {PropertyService} from './services/property-service';
import {BrokerService} from './services/broker-service';

@App({
    templateUrl: 'build/app.html',
    config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
    providers: [PropertyService, BrokerService]
})
class MyApp {

    constructor(app:IonicApp, platform:Platform) {

        // set up our app
        this.app = app;
        this.platform = platform;
        this.initializeApp();

        // set our app's pages
        this.pages = [
            {title: 'Properties', component: PropertyListPage},
            {title: 'Brokers', component: BrokerListPage},
            {title: 'Favorites', component: FavoriteListPage}
        ];

        // make PropertyListPage the root (or first) page
        this.rootPage = PropertyListPage;
    }

    initializeApp() {
        this.platform.ready().then(() => {
            if (window.StatusBar) {
                window.StatusBar.styleDefault();
            }
        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.app.getComponent('leftMenu').close();
        // navigate to the new page if it is not the current page
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    }

}
