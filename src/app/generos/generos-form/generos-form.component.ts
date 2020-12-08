import { Component, OnInit } from '@angular/core';
import { Genero } from '../../models/genero';

@Component({
  selector: 'app-generos-form',
  templateUrl: './generos-form.component.html',
  styleUrls: ['./generos-form.component.css']
})
export class GenerosFormComponent implements OnInit {

  genero: Genero;

  constructor() { 
    this.genero = new Genero;
  }

  ngOnInit(): void {
    this.genero.descricao = 'alguma coisa bem doida'
  }

  onSubmit() {
    console.log(this.genero);
    
  }

}
