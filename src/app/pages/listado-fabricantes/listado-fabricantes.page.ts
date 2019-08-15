import { Component, OnInit } from '@angular/core';
import { FabricantesService } from '../../services/fabricantes-service/fabricantes.service';
import { Fabricante } from '../../models/fabricante.models';
import { Router, Route } from '@angular/router';
import { Vehiculo } from '../../models/vehiculo.models';


@Component({
  selector: 'app-listado-fabricantes',
  templateUrl: './listado-fabricantes.page.html',
  styleUrls: ['./listado-fabricantes.page.scss'],
})
export class ListadoFabricantesPage implements OnInit {
  fabricantes: Fabricante[];
  greaterTen: any;
  constructor(private fabricanteServicio: FabricantesService, private route:Router) { }

  ngOnInit() {
    this.fabricanteServicio.verFabricantes().subscribe((fabricantes) => {
      this.fabricantes = fabricantes;
      console.log(fabricantes)
    }, (errorObtenido) => {
      console.log(errorObtenido) 
    })
  }
  verVehiculos(idVehiculo: Vehiculo){
    this.route.navigate(['vehiculos',{idVehiculo:JSON.stringify(idVehiculo)}])
    //console.log(vehiculo)
  }
  // greaterTen = numbers.filter(number => number > 10 ); // return implicito
  // console.log(greaterTen);
}
