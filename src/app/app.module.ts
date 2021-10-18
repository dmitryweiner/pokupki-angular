import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokupkiModule } from "./pokupki/pokupki.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PokupkiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
