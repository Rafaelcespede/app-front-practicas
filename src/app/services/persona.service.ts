import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { persona } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
private url: string = 'http://localhost:3000/api/auth'
constructor(private http: HttpClient, private router: Router) { }

list(): Observable<persona[]> {
    return this.http.get<persona[]>(this.url + '/persona');
}

save(post: persona): Observable<any> {
    return this.http.post<any>(this.url + '/persona/create', post)
}

edit(id: number, upd: any) {
    return this.http.put(`${this.url}/persona/${id}`, upd)
}
delete(id: number) {
    return this.http.delete(`${this.url}/persona/${id}`)
}
}
