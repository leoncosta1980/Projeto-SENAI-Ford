import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleInfoService {
  constructor(private httpClient: HttpClient) { }

  private buildVehicleInfoRequest(vehicleId: string) {
    return `${environment.API_URL}/vehicle/${vehicleId}`
  }

  getVehicleInfo(vehicleId: string) {
      const vehicleInfoUrl = this.buildVehicleInfoRequest(vehicleId)

      return this.httpClient.get(
        vehicleInfoUrl
      )
  }
}
