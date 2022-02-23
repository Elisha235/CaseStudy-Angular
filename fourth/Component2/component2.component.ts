import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['/component2.component.css']
})
export class Component2Component implements OnInit, OnDestroy {
  form!: NgForm;
  buttonName = "Start"
  setInterval: any;
  setTimeOut: any;
  isStart: boolean = true;
  counttime: any;
  wasPaused: boolean = false;
  pauses: any = [];

  constructor(private service: CommonService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let getTimeStamp = this.service.getTime();
    let timerlimit: any;

    if (!form.value.timerLimit) {
      return false
    }

    if (this.isStart) {
      this.service.started.next(getTimeStamp);
      this.buttonName = "ReStart"
      if (this.wasPaused) {
        this.startCount(this.counttime)
        this.wasPaused = false;
      }
      else {
        this.startCount(form.value.timerLimit)
      }
    }
    else {
      this.service.paused.next(getTimeStamp)
      this.pauses.push("Paused at " + (this.counttime) + " seconds")
      this.wasPaused = true;
      clearTimeout(this.setTimeOut);
      clearInterval(this.setInterval);
    }
    this.isStart = !this.isStart;
    return true;
  }

  startCount(value: any) {
    clearTimeout(this.setTimeOut);
    clearInterval(this.setInterval);
    this.counttime = value;

    this.setInterval = setInterval(() => {
      this.service.countValue.next(this.counttime)
      this.counttime = this.counttime - 1;
    }, 1000);

    this.setTimeOut = setTimeout(() => {
      this.isStart = true;
      clearInterval(this.setInterval);
      this.reset();
    }, (value + 1) * 1000);

  }


  reset() {
    clearTimeout(this.setTimeOut);
    clearInterval(this.setInterval);
    this.service.started.next("reset");
    this.service.paused.next("reset");
    this.service.countValue.next(0);
    this.isStart = true;
    this.wasPaused = false;
    this.pauses = [];
    this.buttonName = "Start"
  }

  ngOnDestroy(): void {
    clearTimeout(this.setTimeOut);
    clearInterval(this.setInterval);
  }
}