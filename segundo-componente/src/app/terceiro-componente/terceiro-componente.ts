import { Component } from '@angular/core';

@Component({
  selector: 'app-terceiro-componente',
  imports: [],
  templateUrl: './terceiro-componente.html',
  styleUrl: './terceiro-componente.css'
})
export class TerceiroComponente {

//   // Varialvel de imagem.
//   imagem:string = 'Barcelona.png';

//   //Função para alterar imagem
//   alterarImagem(){

//   if(this.imagem === 'Barcelona.png'){
//     this.imagem = 'saopaulo.png';
//   }else{this.imagem = 'Barcelona.png'}

//   }

// }

 // Varialvel de imagem.
  imagemtwo:string = 'sol.jpg';

  //Função para alterar imagem
  alterarImagemtwo(){

  if(this.imagemtwo === 'sol.jpg'){
    this.imagemtwo = 'lua.jpg';
  }else{this.imagemtwo = 'sol.jpg'}

  }
}

