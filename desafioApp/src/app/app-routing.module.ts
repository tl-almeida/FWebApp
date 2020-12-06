import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaListComponent } from './components/receita-list/receita-list.component';
import { ReceitaDetailsComponent } from './components/receita-details/receita-details.component';
import { AddReceitaComponent } from './components/add-receita/add-receita.component';

const routes: Routes = [
  { path: '', redirectTo: 'receitas', pathMatch: 'full' },
  { path: 'receitas', component: ReceitaListComponent },
  { path: 'receitas/:id', component: ReceitaDetailsComponent },
  { path: 'add', component: AddReceitaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
