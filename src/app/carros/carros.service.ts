import { TokenService } from './../autenticacao/token.service';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carros } from './carros';


const API= environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private httpClient: HttpClient, private tokenService:TokenService) { }

  getCarros(){
    return this.httpClient.get<any>('http://localhost3000/vehicle')
  }

}
