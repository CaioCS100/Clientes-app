import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../../models/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  apiUrl: string = 'http://localhost:8080/gerenciar_hobbies_api_war_exploded//api/generos';

  constructor(private http: HttpClient) { }

  salvar(genero: Genero) : Observable<Genero> {
    return this.http.post<Genero>(this.apiUrl, genero);
  }
}
