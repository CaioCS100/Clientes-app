import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerosRoutingModule } from './generos-routing.module';
import { GenerosFormComponent } from './generos-form/generos-form.component';
import { FormsModule } from '@angular/forms';
import { GenerosListComponent } from './generos-list/generos-list.component';


@NgModule({
  declarations: [GenerosFormComponent, GenerosListComponent],
  imports: [
    CommonModule,
    GenerosRoutingModule,
    FormsModule
  ],
  exports: [
    GenerosFormComponent,
    GenerosListComponent
  ]
})
export class GenerosModule {}
