import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { DataService } from './../data.service';
import { Data } from './../data';
import { map, pluck, switchMap, filter } from 'rxjs/operators';
import { tap } from 'rxjs/operators'
import { Carsdashboard } from './../../dashboard/model/carrosdashboard';
import { CarsdashboardService } from './../../dashboard/carsdashboard.service';
import { Component, Input, NgModule, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const API = './angularsenai/projetoford/src/assets/img';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  id!:any;

  valor!:any;

  vehicleData!: Data;

  campoBusca!:any

  Input = new FormControl;



  idcarroselecionado!: any;

  carsdashboard!: Carsdashboard;

  constructor(private carsdashboardService: CarsdashboardService,
    private vehicleDataService:DataService, private http:HttpClient) { }


  ngOnInit(): void {
    this.carsdashboardService.getCarsdashboard().subscribe((retornoAPI) =>{
     this.carsdashboard = retornoAPI.vehicles;
    }
    )

    this.vehicleDataService.getData().subscribe((retornoAPI) =>{
      this.vehicleData = retornoAPI.vehicleData;
     }
     )
  }
  aoSelecionar(){
    return this.idcarroselecionado
  }
  campoBuscaDigitado(){
    return this.campoBusca;

  }
}




