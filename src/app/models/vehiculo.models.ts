import { Fabricante } from './fabricante.models';
export interface Vehiculo{
    serie: number;
    color: string;
    cilindraje: any;
    potencia: number;
    peso: any;
    fabricante_id: number;
    fabricante: Fabricante;      
}