import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculosService } from '../../services/vehiculos-service/vehiculos.service';
import { Vehiculo } from '../../models/vehiculo.models';

@Component({
  selector: 'app-fabricante-vehiculos',
  templateUrl: './fabricante-vehiculos.page.html',
  styleUrls: ['./fabricante-vehiculos.page.scss'],
})
export class FabricanteVehiculosPage implements OnInit {
  idFabricante: any;
  vehiculoDeFabricante: Vehiculo [];
  constructor(private route: ActivatedRoute,
              private vehiculosService: VehiculosService) { }

  ngOnInit() {
    var idF = this.route.snapshot.paramMap.get('id');
    var vhis =[];
    this.vehiculosService.verVehiculos().subscribe((vehiculosFab) => {
      const result = vehiculosFab.filter( vehi => vehi.fabricante_id == parseInt(idF) ); 
      console.log(result);
      this.vehiculoDeFabricante= result;
    }, (errorObtenido) => {
      console.log(errorObtenido);
    })  
  }
}
