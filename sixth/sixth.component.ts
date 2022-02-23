import { Component } from '@angular/core';

@Component({
  selector: 'sixth-route',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent {
  constructor() { }

  box: any;
  ngOnInit(): void {
    this.box = [];
    for (let index = 0; index < 50; index++) {
      this.box.push(index);
    }

    window.onscroll = (e) => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.loadMore();
      }
    }
  }

  loadMore() {
    let size = this.box.length;
    for (let index = size; index < size + 20; index++) {
      this.box.push(index);
    }
  }

  divClicked(element: number) {
    alert('Button in ' + (element+1) + this.ordinalCheck(element) + ' div clicked');
  }

  ordinalCheck(element: number) {
    let ele = element + 1;
    let s = ['th', 'st', 'nd', 'rd'];
    let x: number = ele % 100;
     return (s[(x-20) % 10] || s[x] || s[0]);
  }
}
