import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerosRoutingModule } from './generos-routing.module';
import { GenerosFormComponent } from './generos-form/generos-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GenerosFormComponent],
  imports: [
    CommonModule,
    GenerosRoutingModule,
    FormsModule
  ]
})
export class GenerosModule { }
