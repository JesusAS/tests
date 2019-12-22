import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  go(){
    this.router.navigateByUrl('/');
  }

  successCallback(result) {
    console.log(result); // true - enabled, false - disabled
  }
 
  errorCallback(error) {
    console.log(error);
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad');
    (<any>window).plugins.preventscreenshot.enable((a) => this.successCallback(a), (b) => this.errorCallback(b));
  }

}
