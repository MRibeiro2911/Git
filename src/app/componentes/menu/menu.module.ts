import { HomeModule } from './../../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';



@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule],
  exports:[MenuComponent],
})
export class MenuModule { }
