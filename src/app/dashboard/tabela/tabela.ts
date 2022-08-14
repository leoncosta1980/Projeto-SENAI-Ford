export interface Tabela extends Array<Tabela>{
}

export interface Tabela{
  vin: number;
  odometer: number;
  fuelLevel: number;
  status: String;
  lat: number;
  long: number;
}

export interface TabelaAPI {
  payload: Tabela;
}
