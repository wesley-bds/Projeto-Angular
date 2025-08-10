import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  imports: [],
  templateUrl: './primeiro-componente.html',
  styleUrl: './primeiro-componente.css'
})
export class PrimeiroComponente {
nome:string = "Wesley";
idade:number = 18;

}
