import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
/*SERVICES*/
import { DespesaService } from '../despesa.service';

/*CLASSES*/
import { Despesa } from '../despesa'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  despesas: Despesa[] = new Array();

  constructor(private despesaService: DespesaService,
              private router: Router) { }

  ngOnInit() {
    this.despesas = this.despesaService.getAll();
  }

  add(): void {
    this.router.navigate(['/add']);
  }

  delete(despesaId: number): void {
    this.despesaService.delete(despesaId);
  }

}
