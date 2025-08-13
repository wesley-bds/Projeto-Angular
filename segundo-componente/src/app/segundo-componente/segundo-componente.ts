import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  imports: [],
  templateUrl: './segundo-componente.html',
  styleUrl: './segundo-componente.css'
})
export class SegundoComponente {

  //Função Mensagem
  mensagem(){
    alert('Hello Word!!!');
  }

   sair(){
    alert('Você Saiu!');
}
}
