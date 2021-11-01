import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Store} from "@ngxs/store";
import {Actions} from "../store";

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent  {

  @Input() title: string = "";
  @Input() price: number = 0;
  @Input() id: string = "";

  constructor(private store: Store) {}

  delete() {
    this.store.dispatch(new Actions.Remove(this.id));
  }

}
