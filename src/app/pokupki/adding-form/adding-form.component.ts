import { Component, EventEmitter, Output } from '@angular/core';
import {PokupkiService} from "../pokupki.service";

export type FormObject = {
  title: string, price: number;
};

@Component({
  selector: 'adding-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.css']
})
export class AddingFormComponent  {
  title = "";
  price = 0;

  constructor(private pokupkiService: PokupkiService) { }

  add() {
      this.pokupkiService.add({
        title: this.title,
        price: this.price
      });
      this.price = 0;
      this.title = "";
  }
}
