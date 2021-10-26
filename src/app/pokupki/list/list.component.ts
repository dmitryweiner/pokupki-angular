import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Buying} from "../interfaces";
import {PokupkiService} from "../pokupki.service";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  buyings: Buying[] = [];
  constructor(private pokupkiService: PokupkiService) {}

  ngOnInit() {
     this.pokupkiService.retreiveBuyings();
  }

  getBuyings() {
    return this.pokupkiService.getBuyings();
  }
}
