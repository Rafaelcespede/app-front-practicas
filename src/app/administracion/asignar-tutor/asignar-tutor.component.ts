import { Component, OnInit } from '@angular/core';
import { tutor } from 'src/app/model/models';
import { AlumnoService } from 'src/app/services/alumno.service';
import { PersonaService } from 'src/app/services/persona.service';
import { TutorService } from 'src/app/services/tutor.service';

@Component({
  selector: 'app-asignar-tutor',
  templateUrl: './asignar-tutor.component.html',
  styleUrls: ['./asignar-tutor.component.css']
})
export class AsignarTutorComponent implements OnInit {

  alumno: any[] = [];
  persona: any[] = [];
  tutorlist: any[] = [];
  tutor: tutor = new tutor();

  constructor(private alumnoserv: AlumnoService, private personaserv: PersonaService, private tutorserv: TutorService) { }

  ngOnInit(): void {
    this.listarAlumno();
    this.listarPersona();
    this.listarTutor();
  }

  listarAlumno() {
    this.alumnoserv.list().subscribe(data => {
      this.alumno = data;
    })
  }

  listarPersona() {
    this.personaserv.list().subscribe(data => {
      this.persona = data;
    })
  }

  listarTutor() {
    this.tutorserv.list().subscribe(data => {
      this.tutorlist = data;
    })
  }

}
