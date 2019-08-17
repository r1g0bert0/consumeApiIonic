import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FabricanteVehiculosPage } from './fabricante-vehiculos.page';

const routes: Routes = [
  {
    path: '',
    component: FabricanteVehiculosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FabricanteVehiculosPage]
})
export class FabricanteVehiculosPageModule {}
