import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { Tabela, TabelaAPI } from '../tabela';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  constructor(private httpClient:HttpClient) { }

  getTabela(valor?: string){
    const params = valor ? new HttpParams().append('vin',valor) :undefined;
    return this.httpClient
    .get<TabelaAPI>('http://localhost:3000/vehicleData', { params }).pipe(
      pluck('payload'),
      map((Tabela)=>Tabela
    )
  );
  }

}
