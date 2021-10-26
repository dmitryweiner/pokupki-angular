import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { AddingFormComponent } from './adding-form/adding-form.component';
import { ListItemComponent } from './list-item/list-item.component';
import {PokupkiService} from "./pokupki.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    AddingFormComponent,
    ListItemComponent
  ],
  exports: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ PokupkiService ]
})
export class PokupkiModule { }
