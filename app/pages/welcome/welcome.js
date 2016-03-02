import {Page, NavController, NavParams} from 'ionic-framework/ionic';

@Page({
    templateUrl: 'build/pages/welcome/welcome.html'
})
export class WelcomePage {

    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, navParams) {
        this.nav = nav;
    }

}