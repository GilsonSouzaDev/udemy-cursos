import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardComponent } from '../card/card.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonComponent } from '../card-button/card-button.component';



@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardRoxoComponent,
    // CardButtonComponent,
    // CardRoxoButtonComponent
  ]
})
export class CardsModule { }
