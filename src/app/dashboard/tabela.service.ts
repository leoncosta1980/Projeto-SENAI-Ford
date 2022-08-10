import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  constructor(private httpClient:HttpClient) { }

  getTabela(){
    return this.httpClient.get<any>('http://localhost:3000/vehicleData')
  }
}
