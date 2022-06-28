import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[]; 

  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'http://loiane.training';

    /* É a mesma coisa que o ngFor do component.ht
    for(let i = 0; i < this.cursos.length; i++) {
      this.cursos[i] = this.cursos[i].toUpperCase();
    } */

    //var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
