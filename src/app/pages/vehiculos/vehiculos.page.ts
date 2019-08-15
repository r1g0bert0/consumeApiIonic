import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo.models';
import { VehiculosService } from '../../services/vehiculos-service/vehiculos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {
  vehiculos: Vehiculo[];
  constructor(private vehiculoServicio: VehiculosService, private active: ActivatedRoute) { }

  ngOnInit() {
    this.vehiculoServicio.verVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      console.log(vehiculos)
    }, (errorObtenido) => {
      console.log(errorObtenido) 
    })
  // }vehiculos
  // ngOnInit() {
  //   console.log(this.active.snapshot.params)
   }
}
