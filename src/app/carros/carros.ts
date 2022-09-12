
export interface Carro {
  id: number;
  vehicle: string;
  volumetotal: number;
  connected:number;
  softwareUpdates:number;
  url:string
}

export type Carros = Array<Carro>;
