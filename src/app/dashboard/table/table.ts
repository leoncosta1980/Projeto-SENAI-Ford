export interface Table extends Array<Table>{
}

export interface Table{
  vin: String;
  odometer: number;
  fuelLevel: number;
  status: String;
  lat: number;
  long: number;
}

export interface TableAPI {
  vehicleData: Table[];
}
