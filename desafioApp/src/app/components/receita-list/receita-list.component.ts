import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/services/receitas.service'

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html',
  styleUrls: ['./receita-list.component.css']
})
export class ReceitaListComponent implements OnInit {

  receitas: any;
  currentReceita = null;
  currentIndex = -1;
  titulo = '';

  constructor(private receitaService: ReceitasService) { }

  ngOnInit(): void {
    this.buscaReceitas();
  }

  buscaReceitas() {
    this.receitaService.getAll().subscribe(
      data => {
        this.receitas = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  refreshList() {
    this.buscaReceitas();
    this.currentReceita = null;
    this.currentIndex = -1;
  }

  setAtiveReceita(receita, index) {
    this.currentReceita = receita;
    this.currentIndex = index;
  }

  removeAllReceitas() {
    this.receitaService.deleteAll().subscribe(
      response => {
        console.log(response);
        this.buscaReceitas();
      },
      error => {
        console.log(error);
      });
  }

  buscaTitulo() {
    this.receitaService.findByTitulo(this.titulo).subscribe(
      data => {
        this.receitas = data;
        console.log(data);
      },
      error => {
        console.log(error)
      });
  }

}
