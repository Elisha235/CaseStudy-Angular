import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthComponent } from './fifth.component';

const routes: Routes = [
  {
    path: '', 
    component: FifthComponent, 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FifthRoutingModule {
}
