import { Component, OnInit } from '@angular/core';
import { CaseDetailComponent } from '../case-detail/case-detail.component';
import { Case } from '../case';
import { CaseService } from '../case.service';

@Component({
  	selector: 'app-cases',
  	templateUrl: './cases.component.html',
  	styleUrls: ['./cases.component.css'],
    providers: [
      CaseService
    ]
})
export class CasesComponent implements OnInit {

	cases: Case[];

	caseDetail: Case;

  constructor(private caseService: CaseService) { }

  getCases():void {
    this.caseService.getCases()
      .subscribe(cases => this.cases = cases);;
  }

	ngOnInit() {
    this.getCases();
	}

	onSelect(medCase: Case):void  {
		this.caseDetail = medCase;
	}
}
