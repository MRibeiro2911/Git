export interface Carsdashboard extends Array<Carrosdashboard> {}

export interface Carrosdashboard{
  id: number;
  vehicle: string;
  volumetotal: number;
  connected:number;
  softwareUpdates:number;
  url:string
}


export interface CarsdashboardAPI{
  vehicles:Carsdashboard;
}
