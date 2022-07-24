import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { curso } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
private url: string = 'http://localhost:3000/api/auth'
constructor(private http: HttpClient, private router: Router) { }

list(): Observable<curso[]> {
    return this.http.get<curso[]>(this.url + '/curso');
}

save(post: curso): Observable<any> {
    return this.http.post<any>(this.url + '/curso/create', post)
}

edit(id: number, upd: any) {
    return this.http.put(`${this.url}/curso/${id}`, upd)
}
delete(id: number) {
    return this.http.delete(`${this.url}/curso/${id}`)
}
}
