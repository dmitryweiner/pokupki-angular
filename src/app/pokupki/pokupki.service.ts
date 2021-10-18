import { Injectable } from '@angular/core';
import { Buying } from "./interfaces";
import {FormObject} from "./adding-form/adding-form.component";

@Injectable({
  providedIn: 'root'
})
export class PokupkiService {
  buyings: Buying[] = [
    {
      id: "1",
      title: "Картошка",
      price: 123
    },
    {
      id: "2",
      title: "Яйца",
      price: 100
    }
  ];

  constructor() { }

  getBuyings(): Buying[] {
    return this.buyings;
  }

  add(formObject: FormObject) {
    this.buyings.push({
      id: Math.random().toString(36).substr(2),
      title: formObject.title,
      price: formObject.price
    });
  }

  delete(id: string) {
    const index = this.buyings.findIndex(item => item.id === id);
    this.buyings.splice(index, 1);
  }
}
