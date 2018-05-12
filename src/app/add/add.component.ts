import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
/*SERVICES*/
import { DespesaService } from '../despesa.service';

/*CLASSES*/
import { Despesa } from '../despesa'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  despesa: Despesa;

  constructor(private despesaService: DespesaService,
              private router: Router) { }

  ngOnInit() {
    this.despesa = new Despesa(new Date().getTime(), "", "", new Date(), 0);
  }

  save(): void {
    this.despesaService.save(this.despesa);
    this.router.navigate(['/list']);
  }
}
