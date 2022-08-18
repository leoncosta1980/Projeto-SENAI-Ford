import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  tap, pluck } from 'rxjs/operators';
import { TableAPI } from '../table';

@Injectable({
  providedIn: 'root'
})
export class TableService {


  constructor(private httpClient:HttpClient) { }


  getTable(valor?: string){
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient
    .get<TableAPI>(`http://localhost:3000/vehicleData/`, { params }).pipe(
      tap((valor) => console.log(valor)),
      pluck('vehicleData'),
    );
  }
}
