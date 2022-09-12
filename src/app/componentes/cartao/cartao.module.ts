import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './../../home/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoComponent } from './cartao.component';



@NgModule({
  declarations: [CartaoComponent,DashboardComponent],
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  exports:[CartaoComponent],
})
export class CartaoModule { }
