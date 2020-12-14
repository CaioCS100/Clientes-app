import { Component, OnInit } from '@angular/core';
import { Genero } from '../../models/genero';
import { GeneroService } from '../../services/genero/genero.service';

@Component({
  selector: 'app-generos-form',
  templateUrl: './generos-form.component.html',
  styleUrls: ['./generos-form.component.css']
})
export class GenerosFormComponent implements OnInit {

  genero: Genero;

  constructor(private generoService: GeneroService) { 
    this.genero = new Genero;
  }

  ngOnInit(): void {
  }

  salvar() {
    let generoSalvo: Genero = new Genero();

    this.generoService
        .salvar(this.genero)
        .subscribe(response => {
          console.log(response);
          generoSalvo = response;
        }, errosResponse => {
          console.log(errosResponse);
        });    
  }

}
