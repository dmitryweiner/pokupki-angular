import { Component, EventEmitter, Output } from '@angular/core';
import {PokupkiService} from "../pokupki.service";
import {Store} from "@ngxs/store";
import {Actions} from "../store";

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

  constructor(private store: Store) {  }

  add() {
      this.store.dispatch(new Actions.Add(this.title, this.price));
      this.price = 0;
      this.title = "";
  }
}
