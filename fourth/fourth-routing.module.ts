import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourthComponent } from './fourth.component';

const routes: Routes = [
  {
    path: '', 
    component: FourthComponent, 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourthRoutingModule {
}
