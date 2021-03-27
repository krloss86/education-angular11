import { Component, Input, OnInit } from '@angular/core';
import { Saldos } from '../informacion-cliente';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  @Input()
  saldos: Saldos;
  
  constructor() { }

  ngOnInit(): void {
  }

}
