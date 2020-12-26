import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerosFormComponent } from './generos-form/generos-form.component';
import { GenerosListComponent } from './generos-list/generos-list.component';

const routes: Routes = [
  { path: "generos-form", component: GenerosFormComponent },
  { path: "generos-form/:id", component: GenerosFormComponent },
  { path: "generos-list", component: GenerosListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerosRoutingModule {}
