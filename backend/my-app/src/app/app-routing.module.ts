import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CasesComponent } from './cases/cases.component'
import {ServiceCaseComponent} from './controller/service.case.component';
import { AdminComponent } from './controller/administrator.component';

const routes: Routes = [
	// { path: '', redirectTo: 'cases', pathMatch: 'full' },
    { path: 'cases', component: CasesComponent },
    { path: 'service_cases', component: ServiceCaseComponent },
	{ path: 'admin', component: AdminComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {}
