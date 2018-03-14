import { Component , OnInit } from '@angular/core';
import { CasesComponent } from './cases/cases.component'

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  	title = '宠物医院';

  	ngOnInit() {
  		this.title = "宠物医院Angular2样例"
  	}
}
