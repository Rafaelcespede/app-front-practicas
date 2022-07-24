import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tutor } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
private url: string = 'http://localhost:3000/api/auth'
constructor(private http: HttpClient, private router: Router) { }

list(): Observable<tutor[]> {
    return this.http.get<tutor[]>(this.url + '/tutor');
}
}
