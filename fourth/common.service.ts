import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  countValue=new Subject();
  started=new Subject();
  paused=new Subject();
  constructor() { }

  getTime(){
    var datePipe = new DatePipe('en-US');
    let current = new Date();
    let dateToSet = datePipe.transform(current, 'dd-MM-yyyy hh:mm:ss a');
    return dateToSet;
  }
  
}
