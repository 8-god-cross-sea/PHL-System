import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CommonService} from './common.service';


@Injectable()
export class UserService {
    constructor(private http: HttpClient) {
    }

    /// Create a user
    create(username: string, password: string): Observable<Object> {
        let url = CommonService.getUrl('user');
        let options = {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            params: {username: username, password: password}
        };
        return this.http.post(url, options);
    }

    /// Get information about user who has logged in
    get_now(): Observable<Object> {
        let url = CommonService.getUrl('user');
        return this.http.get(url);
    }

    login(username: string, password: string): Observable<Object> {
        let url = CommonService.getUrl('user/login');
        let options = {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            params: {username: username, password: password}
        };
        return this.http.post(url, options);
    }

    logout(): Observable<Object> {
        let url = CommonService.getUrl('user/logout');
        let options = {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
        };
        return this.http.post(url,options);
    }

    /// Get information about user by user id
    get_by_id(user_id:string):Observable<Object>{
        let url = CommonService.getUrl('user/'+user_id);
        return this.http.get(url);
    }

    update(user_id:string,username:string,password:string):Observable<Object>{
        let url = CommonService.getUrl('user/'+user_id);
        let options = {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            params: {username: username, password: password}
        };
        return this.http.put(url,options);
    }

    delete(user_id:string):Observable<Object>{
        let url = CommonService.getUrl('user/'+user_id);
        return this.http.delete(url);
    }

    /// Get information about all users
    list():Observable<Object>{
        let url = CommonService.getUrl('user/list');
        return this.http.get(url);
    }
}
