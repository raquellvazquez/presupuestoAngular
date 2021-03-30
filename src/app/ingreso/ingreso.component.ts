import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from './ingreso.service';
import { Ingreso } from './ingreso.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos: Ingreso[] = [];

  constructor(private _serviceIngresos: IngresoServicio) {
  }

  ngOnInit(): void {
    this.ingresos = this._serviceIngresos.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso) {
    this._serviceIngresos.eliminar(ingreso)
  }
}
