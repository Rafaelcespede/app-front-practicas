import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  
  @Output() status = new EventEmitter();
  cambiador: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  //Sidebar open
  clickEvent(){
    this.status.emit(this.cambiador = !this.cambiador);     
  }
  
}
