import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
    selector: 'app-component4',
    templateUrl: './component4.component.html',
    styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit, OnDestroy {
    startedSubject: any;
    pausedSubject: any;
    startCount = 0;
    pauseCount = 0;

    constructor(private service: CommonService) { }

    ngOnInit(): void {
        this.startedSubject = this.service.started.subscribe((data) => {
            if (data !== "reset") {
                this.startCount = this.startCount + 1
            }
        })

        this.pausedSubject = this.service.paused.subscribe((data) => {
            if (data !== "reset") {
                this.pauseCount = this.pauseCount + 1
            }
        })
    }
    reset() {
        this.pauseCount = 0;
        this.startCount = 0;
    }

    ngOnDestroy(): void {
        this.startedSubject.unsubscribe();
        this.pausedSubject.unsubscribe();
    }
}