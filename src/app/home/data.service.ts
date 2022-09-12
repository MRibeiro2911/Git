
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getData(valor?: string){

    const params = valor ? new HttpParams().append('vin', valor):undefined;

    return this.httpClient.get<any>('http://localhost:3000/vehicleData', {params})

}
}

