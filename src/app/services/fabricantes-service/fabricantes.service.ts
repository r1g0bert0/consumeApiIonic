import { Injectable } from '@angular/core';
//mis importaciones
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fabricante } from '../../models/fabricante.models';




@Injectable({
  providedIn: 'root'
})
export class FabricantesService {

  constructor(
    public  http: HttpClient
  ) { }

  verFabricantes(): Observable<Fabricante[]>{
    return this.http.get<Fabricante[]>("http://localhost:8000/fabricantes");
  }
}

