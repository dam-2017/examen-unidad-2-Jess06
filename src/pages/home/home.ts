import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Welcome } from "../welcome/welcome";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myForm:FormGroup;
  userE;
  passwdE;
  loginFail;
  userM;
  userP;
  passwdM;
  passwdP;
  user:any;
  constructor(public navCtrl: NavController, public fb:FormBuilder) {
    this.userE=false;
    this.passwdE=false;
    this.loginFail=false;
    this.user={};
    this.userM = false;
    this.userP = false;
    this.passwdM = false;
    this.passwdP = false;
    this.myForm = this.fb.group({
      'user':['',Validators.compose([Validators.minLength(6), Validators.required, Validators.pattern(/[a-z]+/)])],
      'password':['',Validators.compose([Validators.minLength(8), Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\|@#%&])[A-Za-z\d\|@#%&]{8,}$/)])]
    });
  }

  goToWelcomePage(){
    if(this.validateFields()){
      return;
    }
    if(this.user.user=="jelipardope" && this.user.password=="13400472@ittepic"){
      this.navCtrl.push(Welcome);
    }
    else{
      this.loginFail=true;
      console.log("Login falló");
    }
  }

  validateFields(){
    this.userE = false;
    this.passwdE=false;
    this.loginFail = false;

    if(this.myForm.get('user').hasError('required')){
      console.log("hola en usuario");
      this.userE=true;
    }
    if(this.myForm.get('user').hasError('minLength')){
      console.log("hola en usuario");
      this.userM=true;
    }
    if(this.myForm.get('user').hasError('pattern')){
      console.log("hola en usuario");
      this.userP=true;
    }

    if(this.myForm.get('password').hasError('required')){
      this.passwdE=true;
      console.log("hola en contraseña");
    }
    if(this.myForm.get('password').hasError('minLength')){
      this.passwdM=true;
      console.log("hola en contraseña");
    }
    if(this.myForm.get('password').hasError('pattern')){
      this.passwdP=true;
      console.log("hola en contraseña");
    }

    return this.userE || this.userM || this.userP ||  this.passwdE || this.passwdM || this.passwdP;
  }

}
