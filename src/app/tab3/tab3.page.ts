import { Component } from '@angular/core';
import { } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  seconds: number = 11;
  minutes: number = 0;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.seconds == 0 && this.minutes > 0) {
        this.seconds = 59;
        this.minutes--;
      } else if(this.seconds > 0) {
        this.seconds--;
      } else {
        this.seconds = 59;
        this.minutes = 3;
      }

      //Funcion que llama cuando termina
      if (this.minutes == 0 && this.seconds == 0){
        console.log('finished');
        clearInterval(this.interval);
      }

    }, 1000);
  }

}
