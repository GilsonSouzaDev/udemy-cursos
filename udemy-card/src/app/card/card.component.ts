import { Component, OnInit } from '@angular/core';
import { on } from 'events';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
tipo = 'Teste';
preco = 100;

ngOnInit(): void {
  setTimeout(()=>{
    console.log('set timeout');
    this.tipo = 'Simples';
  }, 4000);
}


getFullPrice(){
  return 'R$' + this.preco + ',00/Mês';
}

}
