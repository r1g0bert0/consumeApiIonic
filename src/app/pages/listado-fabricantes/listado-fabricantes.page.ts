import { Component, OnInit } from '@angular/core';
import { FabricantesService } from '../../services/fabricantes-service/fabricantes.service';
import { Fabricante } from '../../models/fabricante.models';
import { Router, Route } from '@angular/router';



@Component({
  selector: 'app-listado-fabricantes',
  templateUrl: './listado-fabricantes.page.html',
  styleUrls: ['./listado-fabricantes.page.scss'],
})
export class ListadoFabricantesPage implements OnInit {
  fabricantes: Fabricante[];
  idFab: any;
  constructor(
      private fabricanteServicio: FabricantesService,
      private route: Router) { }

  ngOnInit() {
    this.fabricanteServicio.verFabricantes().subscribe((fabricantes) => {
      this.fabricantes = fabricantes;
      console.log(fabricantes);
    }, (errorObtenido) => {
      console.log(errorObtenido);
    })
  }
  verVehiculos(idF: number){
    //this.route.navigate(['/vehiculos', {fabricante: JSON.stringify(fabricante)}]);
   // this.idFab = fabricante.id;
    this.route.navigate(["/fabri", idF]);
  }
}
