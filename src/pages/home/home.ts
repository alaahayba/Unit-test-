import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    customData: string = "My Current Data";
    title: string = "Home Page";
    name: string = "";
    caseButton: string = "disabled";
    condition = true;



    chngTitle(nTitle) {
        this.title = nTitle;
    }

    changeData(data) {
        this.customData = data;
    }

    activateButton() {
            if (this.name != "")
                this.condition= false;

            else if (this.name == "")
                this.condition= true;
    }
}

//[disabled]="activateButton()" 