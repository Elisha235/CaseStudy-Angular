import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
})
export class Component3Component implements OnInit, OnDestroy {
  arrClick: any = [];
  startedSubject: any;
  pausedSubject: any;

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.startedSubject = this.service.started.subscribe((data) => {
      if (data !== "reset") {
        this.arrClick.push("Started at " + data)
      }
      else {
        let TimeStamp = this.service.getTime();
        this.arrClick.push("Reset at " + TimeStamp)
      }
    })
    this.pausedSubject = this.service.paused.subscribe((data) => {
      if (data !== "reset") {
        this.arrClick.push("Paused at " + data)
      }
    })
  }

  reset() {
    this.arrClick = []
  }

  ngOnDestroy(): void {
    this.startedSubject.unsubscribe();
    this.pausedSubject.unsubscribe();
  }
}
