import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import {insertItem, patch, removeItem} from '@ngxs/store/operators';
import {Buying} from "./interfaces";
import {PokupkiService} from "./pokupki.service";

export interface BuyingsState { // тип стора
  buyings: Buying[];
}

export namespace Actions {
  export class Add {
    static readonly type = '[buyings] Add';

    constructor(public title: string, public price: number) {
    }
  }

  export class Remove {
    static readonly type = '[buyings] Remove';

    constructor(public id: string) {
    }
  }

  export class Set {
    static readonly type = '[buyings] Set';

    constructor(public buyings: Buying[]) {
    }
  }

  export class GetAll {
    static readonly type = '[buyings] GetAll';

    constructor() {}
  }
}


@State<BuyingsState>({
  name: 'buyingsStore', // ключ, с которым складывается в общий стор
  defaults: {
    buyings: [] // начальное значение
  }
})
@Injectable()
export class BuyingsStore {
  @Selector()
  static buyings(state: BuyingsState) {
    return state.buyings;
  }

  @Selector([BuyingsStore.buyings])
  static sum({buyings}: {buyings: Buying[]}) {
    let sum = 0;
    for (let item of buyings) {
      sum += Number(item.price);
    }
    return sum;
  }

  @Action(Actions.Add) // подписываемся на экшен
  async add(ctx: StateContext<BuyingsState>, action: Actions.Add) {
    this.pokupkiService.add({title: action.title, price: action.price})
      .subscribe((buying: Buying) => {
        ctx.setState(
          patch({ // patch чтобы не копировать весь стейт
            buyings: insertItem(buying)
          })
        );
      });
  }

  @Action(Actions.Remove) // подписываемся на экшен
  async remove(ctx: StateContext<BuyingsState>, action: Actions.Remove) {
    this.pokupkiService.remove(action.id)
      .subscribe(() => {
        ctx.setState(
          patch({ // patch чтобы не копировать весь стейт
            buyings: removeItem<Buying>(item => item!.id === action.id)
          })
        );
      });
  }

  @Action(Actions.GetAll) // подписываемся на экшен
  async getAll(ctx: StateContext<BuyingsState>, action: Actions.GetAll) {
    this.pokupkiService.getAll()
      .subscribe(buyings => {
        ctx.setState(
          patch({ // patch чтобы не копировать весь стейт
            buyings: buyings
          })
        );
      });
  }

  constructor(private pokupkiService: PokupkiService) {}
}
