import { DashboardComponent } from './../home/dashboard/dashboard.component';
import { PaginahomeComponent } from './../paginahome/paginahome/paginahome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'',
    component:PaginahomeComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
