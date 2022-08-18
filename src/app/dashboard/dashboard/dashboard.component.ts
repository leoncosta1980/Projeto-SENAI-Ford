import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { VehicleInfoService } from './services/vehicle-info.service';
import { merge } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  initialVehicleId = "1"
  vehicleId = new FormControl(this.initialVehicleId)
  initialVehicleInfo$ = this.vehicleInfoService.getVehicleInfo(this.initialVehicleId).pipe();
  vehicleInfo$ = this.vehicleId.valueChanges.pipe(
    switchMap((value) => this.vehicleInfoService.getVehicleInfo(value as string)),
    tap(console.log),
  )


  vehicles = [{
    id: "1",
    name: "Ranger",
  }, {
    id: "2",
    name: "Mustang",
  },{
    id:"3",
    name: "Territory",
  },{
    id:"4",
    name: "Bronco Sport",
  }]

  constructor(private vehicleInfoService: VehicleInfoService) { }

  ngOnInit(): void {
  }

  vehicleInfos$ = merge(this.initialVehicleInfo$, this.vehicleInfo$);


}
