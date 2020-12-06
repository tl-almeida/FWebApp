import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddReceitaComponent } from './components/add-receita/add-receita.component';
import { ReceitaDetailsComponent } from './components/receita-details/receita-details.component';
import { ReceitaListComponent } from './components/receita-list/receita-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddReceitaComponent,
    ReceitaDetailsComponent,
    ReceitaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
