import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) { }

  go(){
    this.router.navigateByUrl('/test');
  }

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
    (<any>window).plugins.preventscreenshot.disable((a) => this.successCallback(a), (b) => this.errorCallback(b));
  }
  

}
