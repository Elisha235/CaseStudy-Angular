import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'fourth-route',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent {

  countTimer: any = 0; 
  countValue: any;

  constructor(private service: CommonService) { }
}


