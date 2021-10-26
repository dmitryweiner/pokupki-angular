import {Injectable} from '@angular/core';
import {Buying} from "./interfaces";
import {FormObject} from "./adding-form/adding-form.component";
import {HttpClient} from "@angular/common/http";

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

  async getBuyings(): Promise<Buying[]> {
    this.buyings = await this.http.get<Buying[]>(URL).toPromise();
    return this.buyings;
  }

  getCurrentBuyings() {
    return this.buyings;
  }

  async add(formObject: FormObject) {
    const newBuying = {
      title: formObject.title,
      price: formObject.price
    };
    await this.http.post(URL, newBuying).toPromise();
    await this.getBuyings();
  }

  async delete(id: string) {
    await this.http.delete(`${URL}/${id}`).toPromise();
    await this.getBuyings();
  }
}
