import { Component, OnInit } from '@angular/core';
import { Erro } from 'src/app/models/erro';
import { Genero } from '../../models/genero';
import { GeneroService } from '../../services/genero/genero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-generos-form',
  templateUrl: './generos-form.component.html',
  styleUrls: ['./generos-form.component.css']
})
export class GenerosFormComponent implements OnInit {

  private readonly GENERO_SALVO_COM_SUCESSO = 'Gênero salvo com sucesso!';
  private readonly GENERO_ATUALIZADO_COM_SUCESSO = 'Gênero atualizado com sucesso!';
  private readonly MSG_ERRO_AO_CADASTRAR_GENERO = 'Ocorreu um Erro ao tentar salvar o Gênero!';
  private readonly MSG_ERRO_AO_ATUALIZAR_GENERO = 'Ocorreu um Erro ao tentar atualizar o Gênero!';

  listaErros: Erro[];

  genero: Genero;

  cadastrado: Boolean;
  msgSucesso: String;
  msgErro: String;
  id: Number;

  constructor(private generoService: GeneroService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { 
    this.listaErros = [];
    
    this.genero = new Genero;

    this.cadastrado = false;
    this.msgSucesso = '';
    this.msgErro = '';
    this.id = new Number();
  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.limparObjetoGenero();

    if (this.id != undefined)
      this.buscarGenero();
  }

  salvar() {
    if (this.genero.id == undefined)
      this.cadastrarGenero();
    else
      this.atualizarGenero();
  }

  private cadastrarGenero() : void {
    this.msgSucesso = this.GENERO_SALVO_COM_SUCESSO;
    this.msgErro = this.MSG_ERRO_AO_CADASTRAR_GENERO;
    this.generoService
      .salvar(this.genero)
      .subscribe(response => this.enviarMensagemDeSucesso(),
                 erroResponse => this.carregarListaErros(erroResponse.error));
  }

  private atualizarGenero() : void {
    this.msgSucesso = this.GENERO_ATUALIZADO_COM_SUCESSO;
    this.msgErro = this.MSG_ERRO_AO_ATUALIZAR_GENERO;
    this.generoService
      .atualizar(this.genero)
      .subscribe(response => this.enviarMensagemDeSucesso(),
                 erroResponse => this.carregarListaErros(erroResponse.error));
  }

  private buscarGenero() : void {
    this.generoService
      .buscar(this.id)
      .subscribe(response => this.genero = response,
                 erroResponse => this.carregarListaErros(erroResponse.error))
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
