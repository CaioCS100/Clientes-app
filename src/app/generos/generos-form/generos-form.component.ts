import { Component } from '@angular/core';
import { Erro } from 'src/app/models/erro';
import { Genero } from '../../models/genero';
import { GeneroService } from '../../services/genero/genero.service';

@Component({
  selector: 'app-generos-form',
  templateUrl: './generos-form.component.html',
  styleUrls: ['./generos-form.component.css']
})
export class GenerosFormComponent {

  listaErros: Erro[];

  genero: Genero;

  cadastrado: Boolean;

  constructor(private generoService: GeneroService) { 
    this.listaErros = [];
    
    this.genero = new Genero;

    this.cadastrado = false;
  }

  salvar() {
    this.generoService
        .salvar(this.genero)
        .subscribe(response => {
          this.enviarMensagemDeSucesso();
        }, errosResponse => {
          this.carregarListaErros(errosResponse.error);
        });    
  }

  private carregarListaErros(erros: Erro[]) : void {
    this.cadastrado = false;
    this.listaErros = erros;
  }

  private enviarMensagemDeSucesso() : void {
    this.cadastrado = true;
    this.limparObjetoGenero();
  }

  private limparObjetoGenero() : void {
    this.genero = new Genero();
    this.limparListaErros();
  }

  private limparListaErros() : void {
    this.listaErros = [];
  }
}
