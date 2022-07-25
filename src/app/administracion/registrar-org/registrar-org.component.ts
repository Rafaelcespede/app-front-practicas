import { Component, OnInit } from '@angular/core';
import { curso, tutor } from 'src/app/model/models';
import { CursoService } from 'src/app/services/curso.service';
import { PersonaService } from 'src/app/services/persona.service';
import { TutorService } from 'src/app/services/tutor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-org',
  templateUrl: './registrar-org.component.html',
  styleUrls: ['./registrar-org.component.css']
})
export class RegistrarOrgComponent implements OnInit {

  curso: curso = new curso();
  alumno: any[] = [];
  persona: any[] = [];
  tutorlist: any[] = [];
  tutor: tutor = new tutor();

  constructor(private cursoserv: CursoService, private personaserv: PersonaService, private tutorserv: TutorService) { }

  ngOnInit(): void {
    this.listarTutor();
    this.listarPersona();
  }

  registrarCurso(){
    this.cursoserv.save(this.curso).subscribe(

    );
    Swal.fire('Completado', `El curso ha sido creado correctamente`, 'success')
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
