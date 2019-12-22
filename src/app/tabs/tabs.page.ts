import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  ngOnInit(): void { }

  constructor() {}

  successCallback(result) {
    console.log(result); // true - enabled, false - disabled
  }
 
  errorCallback(error) {
    console.log(error);
  }

}
