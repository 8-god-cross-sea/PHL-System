import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Case } from './case';
import { CASES } from './mock-cases';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CaseService {

	private casesUrl = 'api/cases';

	// private handleError<T> (operation = 'operation', result?: T) {
	//   return (error: any): Observable<T> => {

	//     // TODO: send the error to remote logging infrastructure
	//     console.error(error); // log to console instead

	//     // TODO: better job of transforming error for user consumption
	//     this.log(`${operation} failed: ${error.message}`);

	//     // Let the app keep running by returning an empty result.
	//     return of(result as T);
	//   };
	// }

	constructor(
  		private http: HttpClient
  	) { }

  	getCases(): Observable<Case[]> {
  		return of(CASES);
  		// return this.http.get<Case[]>(this.casesUrl)
  	// 	.pipe(
  			// tap(cases => console.log(`fetched cases`)),
			// catchError(this.handleError('getCases', []))
	  //   );

	}

	updateHero (hero: Case): Observable<any> {
  		return this.http.put(this.casesUrl, hero, httpOptions).pipe(
    		tap(_ => console.log(``)),
	  );
	}
}
