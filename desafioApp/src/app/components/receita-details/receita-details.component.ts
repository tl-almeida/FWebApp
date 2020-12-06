import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/services/receitas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receita-details',
  templateUrl: './receita-details.component.html',
  styleUrls: ['./receita-details.component.css']
})
export class ReceitaDetailsComponent implements OnInit {

  currentReceita = null;
  message = '';

  constructor(
    private receitaService: ReceitasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getReceita(this.route.snapshot.paramMap.get('id'));
  }

  getReceita(id) {
    this.receitaService.get(id).subscribe(
      data => {
        this.currentReceita = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  updatePublicado(status) {
    const data = {
      titulo: this.currentReceita.titulo,
      descricao: this.currentReceita.descricao,
      publicado: status
    };

    this.receitaService.update(this.currentReceita.id, data).subscribe(
      response => {
        this.currentReceita.publicado = status;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  updateReceita() {
    this.receitaService.update(this.currentReceita.id, this.currentReceita).subscribe(
      response => {
        console.log(response);
        this.message = 'Receita atualizada com sucesso!';
      },
      error => {
        console.log(error);
      });
  }

  deleteReceita() {
    this.receitaService.delete(this.currentReceita.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/receitas']);
      },
      error => {
        console.log(error);
      });
  }
}
