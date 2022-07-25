import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vista-formatos',
  templateUrl: './vista-formatos.component.html',
  styleUrls: ['./vista-formatos.component.css']
})
export class VistaFormatosComponent implements OnInit {

  constructor(private storage: Storage) { 
    this.images = [];
  }

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
  
  persona: any[] = [];
  images: string[];
uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
      .then()
      .catch(error => console.log(error));
  }

}
