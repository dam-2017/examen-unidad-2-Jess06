import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

/**
 * Generated class for the Form page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class Form {
  user:any;
  nameE;
  lastNPE;
  lastNME;
  birthE;
  rfcForm:FormGroup;
  rfc;

  constructor(public navCtrl: NavController, public fb:FormBuilder) {
    this.user={};
    this.nameE=false;
    this.lastNME=false;
    this.lastNPE=false;
    this.birthE=false;
    this.rfc="";
    this.rfcForm = this.fb.group({
      'firstName':['',Validators.required],
      'lastNameP':['',Validators.required],
      'lastNameM':['',Validators.required],
      'birth':['', Validators.compose([Validators.required, Validators.pattern(/[\d\d\d\d/][0|1][\d/][0|1|2|3][\d]/)])]
    
    });

  }

  generateRFC(){
    if(this.validateFields()){
      return;
    }
    this.rfc="";
    let last1 = this.user.lastNameP.toUpperCase();
    this.rfc+=last1.substr(0,1);

    for(let i = 1; i<last1.length;i++){
      console.log(last1[i]);
      if(last1[i]=='A' || last1[i]=='E' || last1[i]=='I' || last1[i]=='O' || last1[i]=='U'){
        this.rfc+=last1[i];
        break;
      }
    }
    this.rfc+=this.user.lastNameM.toUpperCase().substr(0,1);
    console.log(this.user.lastNameM.substr(0,1)+ " -- Materno");
    
    this.rfc+=this.user.firstName.toUpperCase().substr(0,1);

    this.rfc+=this.user.birth.split("/")[0].substr(2,4);
    this.rfc+=this.user.birth.split("/")[1];
    this.rfc+=this.user.birth.split("/")[2];
    console.log(this.rfc);
  }

  validateFields(){
    this.birthE=false;
    this.nameE=false;
    this.lastNME=false;
    this.lastNPE=false;
    if(this.rfcForm.get('firstName').hasError('required')){
      this.nameE=true;
    }
    if(this.rfcForm.get('lastNameP').hasError('required')){
      this.lastNPE=true;
    }
    if(this.rfcForm.get('lastNameP').hasError('required')){
      this.lastNME=true;
    }
    if(this.rfcForm.get('birth').hasError('required')){
      this.birthE=true;
    }

    return this.nameE || this.lastNME || this.lastNPE || this.birthE;
  }
}
