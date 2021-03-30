import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  @Input() ingresoTotal: number;

  egresos: Egreso[] = [];

  constructor(private _egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this._egresoServicio.egresos;
  }

  eliminarEgreso(egreso: Egreso) {
    this._egresoServicio.eliminar(egreso)
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }
}
