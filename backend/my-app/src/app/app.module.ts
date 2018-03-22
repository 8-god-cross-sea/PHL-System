import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CasesComponent } from './cases/cases.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';
import { AppRoutingModule } from './app-routing.module';

import { AdminComponent } from './component/administrator/administrator.component';


@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    CaseDetailComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
