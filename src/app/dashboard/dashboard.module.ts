import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuModule } from '../common/components/menu/menu.module';
import { MainModule } from '../home/main.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TabelaComponent } from './tabela/tabela.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TabelaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenuModule,
    MainModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
