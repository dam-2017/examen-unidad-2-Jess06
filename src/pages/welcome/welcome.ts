import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Form } from "../form/form";

/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {

  constructor(public navCtrl: NavController) {
  }

  goToFormPage(){
    this.navCtrl.push(Form);
  }

}
