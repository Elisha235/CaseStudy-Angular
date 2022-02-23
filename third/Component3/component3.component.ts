import { DatePipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'component3',
  templateUrl: './component3.component.html',
})
export class Comp3Component implements OnInit {
  @Input() startPauseArrayVal: any;
  arrClick: any = [];

  constructor() { }

  ngOnInit(): void {
    if (this.startPauseArrayVal !== "reset") {
        this.arrClick.push("Started at " + this.startPauseArrayVal)
      }
    else {
        let TimeStamp = this.getTime();
        this.arrClick.push("Reset at " + TimeStamp)
    }
    
    if (this.startPauseArrayVal !== "reset" && this.startPauseArrayVal === "paused") {
        this.arrClick.push("Paused at " + this.startPauseArrayVal)
      }
  }

  getTime(){
    var datePipe = new DatePipe('en-US');
    let current = new Date();
    let dateToSet = datePipe.transform(current, 'dd-MM-yyyy hh:mm:ss a');
    return dateToSet;
  }

  reset() {
    this.arrClick = []
  }
}
