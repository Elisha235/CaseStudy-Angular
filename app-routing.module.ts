import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'first',
      loadChildren: () => import('./first/first-routing.module').then(x=> x.FirstRoutingModule)
    },
    {
      path: 'second',
      loadChildren: () => import('./second/second-routing.module').then(x => x.SecondRoutingModule)
    },
    {
      path: 'third',
      loadChildren: () => import('./third/third-routing.module').then(x => x.ThirdRoutingModule)
    },
    {
      path: 'fourth',
      loadChildren: () => import('./fourth/fourth-routing.module').then(x => x.FourthRoutingModule)
    },
    {
      path: 'fifth',
      loadChildren: () => import('./fifth/fifth-routing.module').then(x => x.FifthRoutingModule)
    },
    {
      path: 'sixth',
      loadChildren: () => import('./sixth/sixth-routing.module').then(x => x.SixthRoutingModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
