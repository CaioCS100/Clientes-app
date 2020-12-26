import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../../models/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private readonly apiUrl: string = 'http://localhost:8080/gerenciarhobbies_war_exploded/api/generos';

  constructor(private http: HttpClient) { }

  salvar(genero: Genero) : Observable<Genero> {
    return this.http.post<Genero>(this.apiUrl, genero);
  }

  listar() : Observable<Genero[]> {
    return this.http.get<Genero[]>(this.apiUrl);
  }

  buscar(id: Number) : Observable<Genero> {
    return this.http.get<Genero>(`${this.apiUrl}/${id}`);
  }

  atualizar(genero : Genero) : Observable<Genero> {
    return this.http.put<Genero>(`${this.apiUrl}/${genero.id}`, genero);
  }
}
