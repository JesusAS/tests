import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{

  constructor() {}

  successCallback(result) {
    console.log(result); // true - enabled, false - disabled
  }
 
  errorCallback(error) {
    console.log(error);
  }

  //Funcion que se ejecuta cada vez que se muestra la vista
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    //Funcion que permite o no la captura de screenshots... disable no deja y enable si
    (<any>window).plugins.preventscreenshot.enable((a) => this.successCallback(a), (b) => this.errorCallback(b));
  }

}
