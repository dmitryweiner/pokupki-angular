import {Injectable} from '@angular/core';
import {Buying} from "./interfaces";
import {FormObject} from "./adding-form/adding-form.component";
import {HttpClient} from "@angular/common/http";
import {concatMap} from "rxjs/operators";
import {Observable} from "rxjs";

/**
 * Using this server:
 * @see https://github.com/dmitryweiner/todo-server/
 */
const URL = "http://localhost:3001/buyings";

@Injectable({
  providedIn: 'root'
})
export class PokupkiService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Buying[]> {
    return this.http.get<Buying[]>(URL);
  }

  add(formObject: FormObject): Observable<Buying> {
    return this.http.post<Buying>(URL, formObject);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`);
  }
}
