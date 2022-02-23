import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'component4',
    templateUrl: './component4.component.html',
    styleUrls: ['./component4.component.css']
})
export class Comp4Component implements OnInit {
    @Input() startPauseVal: any;
    startCount = 0;
    pauseCount = 0;

    constructor() { }

    ngOnInit(): void {
        if (this.startPauseVal !== "reset") {
            this.startCount = this.startCount + 1
        }

        if (this.startPauseVal !== "reset") {
            this.pauseCount = this.pauseCount + 1
        }
    }
    reset() {
        this.pauseCount = 0;
        this.startCount = 0;
    }
}