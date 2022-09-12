import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './../home/home.module';

import { MensagemModule } from './../componentes/mensagem/mensagem.module';
//import { CartaoModule } from './../componentes/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosRoutingModule } from './carros-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    MensagemModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class CarrosModule { }
