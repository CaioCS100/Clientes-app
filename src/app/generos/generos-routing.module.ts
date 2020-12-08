import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerosFormComponent } from './generos-form/generos-form.component';

const routes: Routes = [
  { path: "generos-form", component: GenerosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerosRoutingModule { }
