import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  private currentTab: string = 'tab1'; // Variable que guarda la ultima tab visitada

  ngOnInit(): void { }

  constructor() {}

  // Funcion que se ejecuta cada que se cambia una tab y la guarda en una variable
  onTabsChanged(e) {
    console.log(e);
    this.currentTab = e.tab;
  }

  successCallback(result) {
    console.log(result); // true - enabled, false - disabled
  }

  errorCallback(error) {
    console.log(error);
  }

  //Funcion que se ejecuta cada vez que se muestra la vista
  ionViewDidEnter() {
    console.log('ionViewDidEnter - TABS');
    console.log(this.currentTab);

    // Recuerda la ultima tab visitada y carga su configuracion.
    switch(this.currentTab){
      case 'tab1': // Estos son los nombres de las tabs y que quieres que haga cada una
        (<any>window).plugins.preventscreenshot.disable((a) => this.successCallback(a), (b) => this.errorCallback(b));
        break;
      case 'tab2':
        (<any>window).plugins.preventscreenshot.enable((a) => this.successCallback(a), (b) => this.errorCallback(b));
        break;
      case 'tab3':
        (<any>window).plugins.preventscreenshot.enable((a) => this.successCallback(a), (b) => this.errorCallback(b));
        break;
    }
  }

}
