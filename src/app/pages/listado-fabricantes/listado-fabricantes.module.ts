import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ListadoFabricantesPage } from './listado-fabricantes.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoFabricantesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListadoFabricantesPage]
})
export class ListadoFabricantesPageModule {}
