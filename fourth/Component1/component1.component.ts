import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
    selector: 'app-component1',
    templateUrl: './component1.component.html',
    styleUrls: ['./component1.component.css']
})

export class Component1Component implements OnInit, OnDestroy {
    countTimer: any = 0; 
    countValue: any;
    constructor(private service: CommonService) {}

    ngOnInit(): void {
        this.countValue = this.service.countValue.subscribe((data) => {
            this.countTimer = data; 
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
        })
    }
    
    ngOnDestroy(): void 
    { 
        this.countValue.unsubscribe(); 
    }
}