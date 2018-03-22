import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {ServiceCaseComponent} from './controller/service.case.component';
import {CasesComponent} from './cases/cases.component';
import {CaseDetailComponent} from './case-detail/case-detail.component';
import {AppRoutingModule} from './/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        CasesComponent,
        CaseDetailComponent,
        ServiceCaseComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
