import { Injectable } from '@angular/core';
import { Despesa } from './despesa'
import { LocalStorageService} from 'angular-2-local-storage'

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private despesas: Despesa[] = new Array();

  public getDb(): void {
    this.despesas = [];
    if (this.localStorageService.get("despesas") != null) {
      this.despesas = <Despesa[]>JSON.parse(this.localStorageService.get("despesas"));
    }
  }

  public getAll(): Despesa[] {
    //this.despesas = [new Despesa(1, 'Mercado', 'Extra', new Date("2018-05-06"), 280.90),
    //                 new Despesa(2, 'Lazer', 'Cinema', new Date("2018-05-05"), 100.00)];
                     this.getDb();
    return this.despesas
  }

  public save(despesa: Despesa): void {
    //console.log(despesa);

    this.getDb();
    this.despesas.push(despesa);
    this.localStorageService.set("despesas", JSON.stringify(this.despesas));
  }


    public delete(despesaId: number): void {
      for (var i = 0; i < this.despesas.length; i++) {
        if (this.despesas[i].id == despesaId) {
          this.despesas.splice(i, 1);
        }
      }
      this.localStorageService.set("despesas", JSON.stringify(this.despesas));
    }


  constructor(private localStorageService: LocalStorageService) {

  }
}
