import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://brn.com.br';
  urlImagem = 'https://cdn.pixabay.com/photo/2022/06/22/16/10/cathedral-7278228_960_720.jpg';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  cursoAngular: boolean = true;

  nome: string = 'abc';

  pessoa = {
    nome: 'def',
    idade: 20
  }

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  OnMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
