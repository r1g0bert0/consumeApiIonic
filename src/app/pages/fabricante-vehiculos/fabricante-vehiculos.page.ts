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
    const idF = this.route.snapshot.paramMap.get('id');
    // this.vehiculosService.verVehiculos().subscribe(vehiculosFab => {
    //   this.vehiculoDeFabricante = vehiculosFab.find(vehiculosFab.id);
    //   console.log(vehiculos);
    // }
    // var found = array1.find(function(element) {
    //   return element > 10;
    // });   
  }


   
   // greaterTen = numbers.filter(number => number > 10 ); // return implicito
  // console.log(greaterTen);
}
