import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo: string = 'ingresoOperacion';
  descripcionInput: string;
  valorInput: number;

  constructor(private _egresoService: EgresoServicio,
    private _ingresoService: IngresoServicio
  ) { }

  ngOnInit(): void {
  }

  tipoOperacion(event) {
    this.tipo = event.target.value;
  }

  agregarValor() {
    if (this.tipo === 'ingresoOperacion') {
      this._ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    } else {
      this._egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }
  }

}
