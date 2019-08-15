import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../../models/vehiculo.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(
    private http: HttpClient
  ) { }

  verVehiculos(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>("http://localhost:8000/vehiculos");//http://localhost:8000/fabricantes/2/vehiculos
  }
}
