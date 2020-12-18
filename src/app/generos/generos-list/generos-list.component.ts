import { Component, OnInit } from '@angular/core';
import { Genero } from '../../models/genero';
import { GeneroService } from '../../services/genero/genero.service';

@Component({
  selector: 'app-generos-list',
  templateUrl: './generos-list.component.html',
  styleUrls: ['./generos-list.component.css']
})
export class GenerosListComponent implements OnInit {

  listaGeneros: Genero[];
  msgErro: String;
  

  constructor(private generoService: GeneroService) { 
    this.listaGeneros = [];
    this.msgErro = '';
  }

  ngOnInit(): void {
    this.carregarListaGeneros();
  }

  private carregarListaGeneros() : void {
    this.generoService.listar()
    .subscribe(response =>  {
      this.listaGeneros = response
      this.limparMsgErro();
    }, erroResponse => {
      this.msgErro = erroResponse.message;
    });
  }

  private limparMsgErro() : void {
    this.msgErro = '';
  }
}
