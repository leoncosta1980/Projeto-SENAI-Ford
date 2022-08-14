import { TabelaService } from './services/tabela.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap, switchMap, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Tabela } from './tabela';
import { merge } from 'rxjs';

const ESPERA_DIGITACAO = 300;
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  tabelaInput = new FormControl();
  todaTabela$ = this.tabelaService.getTabela().pipe(
    tap(()=>{console.log("Fluxo Inicial")
  })
  );

  filtroPeloInput$ = this.tabelaInput.valueChanges.pipe(
    debounceTime(ESPERA_DIGITACAO),
    tap(()=>{console.log("Fluxo do Filtro")}),
    tap(console.log),
    filter((valorDigitado)=>valorDigitado.length >= 6 || !valorDigitado.length),
    distinctUntilChanged(),
    switchMap((valorDigitado)=>this.tabelaService.getTabela(valorDigitado))
  );

  Tabela$ = merge(this.todaTabela$, this.filtroPeloInput$);

  constructor(private tabelaService: TabelaService) { }
  }


