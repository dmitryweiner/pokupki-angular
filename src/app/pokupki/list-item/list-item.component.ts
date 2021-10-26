import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PokupkiService} from "../pokupki.service";

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent  {

  @Input() title: string = "";
  @Input() price: number = 0;
  @Input() id: string = "";

  constructor(private pokupkiService: PokupkiService) { }

  delete() {
    this.pokupkiService.delete(this.id);
  }

}
