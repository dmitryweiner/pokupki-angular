import {Injectable} from '@angular/core';
import {Buying} from "./interfaces";
import {FormObject} from "./adding-form/adding-form.component";
import {HttpClient} from "@angular/common/http";
import {concatMap} from "rxjs/operators";

/**
 * Using this server:
 * @see https://github.com/dmitryweiner/todo-server/
 */
const URL = "http://localhost:3001/buyings";

@Injectable({
  providedIn: 'root'
})
export class PokupkiService {
  buyings: Buying[] = [];

  constructor(private http: HttpClient) { }

  retreiveBuyings() {
    this.http.get<Buying[]>(URL).subscribe(result => this.buyings = result);
  }

  getBuyings() {
    return this.buyings;
  }

  add(formObject: FormObject) {
    const newBuying = {
      title: formObject.title,
      price: formObject.price
    };
    this.http.post(URL, newBuying)
      .pipe(concatMap(result => this.http.get<Buying[]>(URL)))
      .subscribe(result => this.buyings = result);
  }

  delete(id: string) {
    this.http.delete(`${URL}/${id}`)
      .pipe(concatMap(result => this.http.get<Buying[]>(URL)))
      .subscribe(result => this.buyings = result);
  }
}
