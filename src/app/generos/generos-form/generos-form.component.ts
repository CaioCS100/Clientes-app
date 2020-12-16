import { Component, OnInit } from '@angular/core';
import { Erro } from 'src/app/models/erro';
import { Genero } from '../../models/genero';
import { GeneroService } from '../../services/genero/genero.service';

@Component({
  selector: 'app-generos-form',
  templateUrl: './generos-form.component.html',
  styleUrls: ['./generos-form.component.css']
})
export class GenerosFormComponent implements OnInit {

  genero: Genero;
  listaErros: Erro[];

  constructor(private generoService: GeneroService) { 
    this.genero = new Genero;
    this.listaErros = [];
  }

  ngOnInit(): void {
  }

  salvar() {
    let generoSalvo: Genero = new Genero();

    this.generoService
        .salvar(this.genero)
        .subscribe(response => {
          generoSalvo = response;
        }, errosResponse => {
          this.carregarListaErros(errosResponse.error);
        });    
  }

  private carregarListaErros(erros: Erro[]) : void {
    this.listaErros = erros;
  }

  private limparLista() : void {
    this.listaErros = [];
  } 
}
