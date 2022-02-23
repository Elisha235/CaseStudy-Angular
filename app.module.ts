import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { SixthComponent } from './sixth/sixth.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Component1Component } from './fourth/Component1/component1.component';
import { Component2Component } from './fourth/Component2/component2.component';
import { Component3Component } from './fourth/Component3/component3.component';
import { Component4Component } from './fourth/Component4/component4.component';
import { Comp1Component } from './third/Component1/component1.component';
import { Comp2Component } from './third/Component2/component2.component';
import { Comp3Component } from './third/Component3/component3.component';
import { Comp4Component } from './third/Component4/component4.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
