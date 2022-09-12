export interface Data extends Array<Dados> {}

export interface Dados {
  id:number;
  vin:any;
  odometer:any;
  tirePressure:any;
  status:any;
  batteryStatus:any;
  fuelLevel:any;
  lat:any;
  long:any;
}

export interface DataApi{
  payload:Data
}

