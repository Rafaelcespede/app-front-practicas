import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { alumno } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private url: string = 'http://localhost:3000/api/auth'
  constructor(private http: HttpClient, private router: Router) { }

  list(): Observable<alumno[]> {
    return this.http.get<alumno[]>(this.url + '/alumno');
  }
}
