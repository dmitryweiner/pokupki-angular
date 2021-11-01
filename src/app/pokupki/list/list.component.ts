import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Select, Store } from "@ngxs/store";
import {Actions, BuyingsState, BuyingsStore} from "../store";
import { Buying } from "../interfaces";
import { Observable } from "rxjs";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  @Select(BuyingsStore.buyings) buyings$?: Observable<Buying[]>;
  @Select(BuyingsStore.sum) sum$?: Observable<Buying[]>;

  constructor(private store: Store) {  }

  ngOnInit() {
     this.store.dispatch(new Actions.GetAll());
  }

}
