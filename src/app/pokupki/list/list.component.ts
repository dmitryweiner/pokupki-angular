import { Component, OnInit } from '@angular/core';
import {Buying} from "../interfaces";

@Component({
  selector: 'app-list', // <app-list></app-list>
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  title = "";
  price = 0;

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

  add() {
    this.buyings.push({
      id: Math.random().toString(36).substr(2),
      title: this.title,
      price: this.price
    });
    this.title = "";
    this.price = 0;
  }

}
