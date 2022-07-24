import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vista-formatos',
  templateUrl: './vista-formatos.component.html',
  styleUrls: ['./vista-formatos.component.css']
})
export class VistaFormatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarInfo(num: number) {
    switch (num) {
      case 1:
        Swal.fire({
          title: 'Carta de aceptación',
          icon: 'info',
          text: 'Documento necesario para iniciar las practicas'
        })
        break;

      case 2:
        Swal.fire({
          title: 'Plan de prácticas',
          icon: 'info',
          text: 'Documento necesario para iniciar las practicas'
        })
        break;
    }
  }
  

}
