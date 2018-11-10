import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
  ],
  providers: [NbSidebarService],
  declarations: [PagesComponent]
})
export class PagesModule { }
