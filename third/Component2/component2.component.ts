import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'component2',
  templateUrl: './component2.component.html',
  styleUrls: ['/component2.component.css']
})
export class Comp2Component implements OnInit, OnDestroy {
  @Output() counter = new EventEmitter<any>();
  @Output() StartPauseArr= new EventEmitter<any>();
  form!: NgForm;
  counttime: any;
  buttonName = "Start"
  setInterval: any;
  setTimeOut: any;
  isStart: boolean = true;

  wasPaused: boolean = false;
  pauses: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  startPauseArray(value: any){
    this.StartPauseArr.emit(value);
  }

  onSubmit(form: NgForm) {
    let getTimeStamp = this.getTime();

    if (!form.value.timerLimit) {
      return false
    }

    if (this.isStart) {
      this.StartPauseArr.emit(getTimeStamp!);
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
      this.StartPauseArr.emit(getTimeStamp!);
      this.pauses.push("Paused at " + (this.counttime) + " seconds")
      this.wasPaused = true;
      clearTimeout(this.setTimeOut);
      clearInterval(this.setInterval);
    }
    this.isStart = !this.isStart;
    return true;
  }

  getTime(){
    var datePipe = new DatePipe('en-US');
    let current = new Date();
    let dateToSet = datePipe.transform(current, 'dd-MM-yyyy hh:mm:ss a');
    return dateToSet;
  }

  startCount(value: any) {
    clearTimeout(this.setTimeOut);
    clearInterval(this.setInterval);
    this.counttime = value;

    this.setInterval = setInterval(() => {
      this.counter.emit(this.counttime);
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
    this.startPauseArray("reset");
    this.counttime = 0;
    this.counter.emit(this.counttime);
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