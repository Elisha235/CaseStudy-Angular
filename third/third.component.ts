import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'third-route',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor() { }
  countValue:any=0;
  startPauseArray:any;
  ngOnInit(): void {
  }
}