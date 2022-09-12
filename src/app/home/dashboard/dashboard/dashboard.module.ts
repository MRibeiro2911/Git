
import { DashboardComponent } from './../dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {path: '',
    component:DashboardComponent,},

  ];

@NgModule({
  imports: [

    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule


  ],
  exports: [RouterModule],
  providers:[

  ]
})

export class DashboardModule { }
