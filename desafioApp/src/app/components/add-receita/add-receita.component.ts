import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/services/receitas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-receita',
  templateUrl: './add-receita.component.html',
  styleUrls: ['./add-receita.component.css']
})
export class AddReceitaComponent implements OnInit {

  receita = {
    titulo: '',
    descricao: '',
    publicado: false
  };

  submitted = false;

  constructor(
    private receitaService: ReceitasService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveReceita() {
    const data = {
      titulo: this.receita.titulo,
      descricao: this.receita.descricao
    };

    this.receitaService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
    });
  }

  newReceita() {
    this.submitted = false;
    this.receita = {
      titulo: '',
      descricao: '',
      publicado: false
    };
    this.router.navigate(['/receitas']);
  }

}
