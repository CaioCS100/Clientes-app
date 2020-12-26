import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from '../../models/genero';
import { GeneroService } from '../../services/genero/genero.service';

@Component({
  selector: 'app-generos-list',
  templateUrl: './generos-list.component.html',
  styleUrls: ['./generos-list.component.css']
})
export class GenerosListComponent implements OnInit {

  private readonly MSG_ERRO_AO_LISTAR_GENERO = "Ocorreu um erro ao tentar listar os Gêneros! <br/> Erro:";
  
  listaGeneros: Genero[];

  msgErro: String;

  constructor(private generoService: GeneroService, private router: Router) { 
    this.listaGeneros = [];
    this.msgErro = '';
  }

  ngOnInit() : void {
    this.carregarListaGeneros();
  }

  novoGenero() : void {
    this.router.navigate(['/generos-form']);
  }

  private carregarListaGeneros() : void {
    this.generoService.listar()
    .subscribe(response =>  {
      this.listaGeneros = response
      this.limparMsgErro();
    }, erroResponse => {
      this.msgErro = this.MSG_ERRO_AO_LISTAR_GENERO + erroResponse.message;
    });
  }

  private limparMsgErro() : void {
    this.msgErro = '';
  }
}
