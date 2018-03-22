import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CasesComponent } from './cases/cases.component'
<<<<<<< HEAD
import { AdminComponent } from './component/administrator/administrator.component';



const routes: Routes = [
	//{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'admin', component: AdminComponent }
=======
import {ServiceCaseComponent} from './controller/service.case.component';


const routes: Routes = [
	{ path: '', redirectTo: 'cases', pathMatch: 'full' },
    { path: 'cases', component: CasesComponent },
    { path: 'service_cases', component: ServiceCaseComponent }
>>>>>>> origin/master
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {}
