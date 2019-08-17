import { Component, OnInit, Input } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo.models';
import { VehiculosService } from '../../services/vehiculos-service/vehiculos.service';
import { ActivatedRoute } from '@angular/router';
import { ListadoFabricantesPage } from '../listado-fabricantes/listado-fabricantes.page';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {
  vehiculos: Vehiculo[];
  idFabricante: any;
  constructor(private vehiculoServicio: VehiculosService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.vehiculoServicio.verVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      console.log(vehiculos);
    }, (errorObtenido) => {
      console.log(errorObtenido);
    });
   }
}
