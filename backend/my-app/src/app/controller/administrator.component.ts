import { Component , OnInit } from '@angular/core';

@Component({
  	selector: 'app-root',
  	templateUrl: '../static/administrator.component.html',
})

export class AdminComponent implements OnInit{
  	title = '宠物医院';

  	ngOnInit() {
  	}
}
