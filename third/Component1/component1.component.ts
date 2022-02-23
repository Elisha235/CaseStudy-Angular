import { Component, Input, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'component1',
    templateUrl: './component1.component.html',
    styleUrls: ['./component1.component.css']
})

export class Comp1Component implements OnInit {
    @Input() countTimer: any = 0;
    countValue: any;
    constructor() { }

    ngOnInit(): void {
        let bounce: any = document.querySelector(".timer")
        if (this.countTimer) {
            if (this.countTimer === 5)
                bounce.style.animation = " bounce 7s normal";
        }
        if (this.countTimer === 0) {
            setTimeout(() => {
                bounce.style.animation = "none"
            }, 2000);
        }
    }
}