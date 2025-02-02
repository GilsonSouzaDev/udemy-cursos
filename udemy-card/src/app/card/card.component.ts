import { Component, OnInit } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

//@ts-ignore
plano?: IPlano = {
  infos: {
    tipo: 'Simples',
    preco: 100
  },
};

/*
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
*/
}
