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
        let param = 'username=' + username + '&password=' + password;
        let options = {
            withCredentials: true,
            headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
        };
        return this.http.post(url, param, options);
    }

    /// Get information about user who has logged in
    get_now(): Observable<Object> {
        let url = CommonService.getUrl('user');
        console.log(url);
        return this.http.get(url, {withCredentials: true});
    }

    login(username: string, password: string): Observable<Object> {
        let url = CommonService.getUrl('user/login');
        let param = 'username=' + username + '&password=' + password;
        let options = {
            withCredentials: true,
            headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Cache-Control': 'no-cache'}),
        };
        return this.http.post(url, param, options);
    }

    logout(): Observable<Object> {
        let url = CommonService.getUrl('user/logout');
        let options = {
            withCredentials: true,
            headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
        };
        return this.http.post(url, options);
    }

    /// Administrator gets user information by user id
    get_by_id(user_id: string): Observable<Object> {
        let url = CommonService.getUrl('user/' + user_id);
        return this.http.get(url, {withCredentials: true});
    }

    /// Administrator updates user information by user id
    /// @param user_id
    update(user_id: string, username: string, password: string): Observable<Object> {
        let url = CommonService.getUrl('user/' + user_id);
        let param = 'username=' + username + '&password=' + password;
        let options = {
            withCredentials: true,
            headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
        };
        return this.http.put(url, param, options);
    }

    /// Administrator deletes user by user_id
    /// @param user_id
    delete(user_id: string): Observable<Object> {
        let url = CommonService.getUrl('user/' + user_id);
        return this.http.delete(url, {withCredentials: true});
    }

    /// Get information about all users
    list(): Observable<Object> {
        let url = CommonService.getUrl('user/list');
        return this.http.get(url, {withCredentials: true});
    }
}
