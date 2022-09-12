

import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CarsdashboardService {


  constructor(private httpClient: HttpClient) { }

  getCarsdashboard(){
    return this.httpClient.get<any>('http://localhost:3000/vehicle');}
}

