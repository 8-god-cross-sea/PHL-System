import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CasesComponent } from './cases/cases.component'
import {ServiceCaseComponent} from './controller/service.case.component';


const routes: Routes = [
	{ path: '', redirectTo: 'cases', pathMatch: 'full' },
    { path: 'cases', component: CasesComponent },
    { path: 'service_cases', component: ServiceCaseComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {}
