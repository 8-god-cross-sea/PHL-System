import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
    selector: 'app-root',
    templateUrl: '../static/service.case.component.html',
    styleUrls: ['../static/service.case.component.css'],
    providers: [
        UserService
    ]
})

export class ServiceCaseComponent implements OnInit {
    title1 = '';
    title2 = '';
    title3 = '';
    title4 = '';
    title5 = '';
    title6 = '';
    title7 = '';
    title8 = '';

    constructor(private userService: UserService) {}

    login() {
        this.userService.login('admin', 'admin')
            .subscribe(res => this.title1 = JSON.stringify(res));
            // .toPromise()
            // .then(res => {
            //     this.title1 = JSON.stringify(res);
            // });
    }

    logout() {
        this.userService.logout()
            .toPromise()
            .then(res => {
                this.title2 = JSON.stringify(res);
            });
    }

    get_user_by_id() {
        this.userService.get_by_id('1')
            .toPromise()
            .then(res => {
                this.title3 = JSON.stringify(res);
            });
    }

    get_user_list() {
        this.userService.list()
            .toPromise()
            .then(res => {
                this.title4 = JSON.stringify(res);
            });
    }

    get_user_now(){
        this.userService.get_now()
            .toPromise()
            .then(res => {
                this.title5 = JSON.stringify(res);
            });
    }

    create_user() {
        this.userService.create('test', 'test')
            .toPromise()
            .then(res => {
                this.title6 = JSON.stringify(res);
            });
    }

    delete_user() {
        this.userService.delete('10')
            .toPromise()
            .then(res => {
                this.title7 = JSON.stringify(res);
            });
    }

    update_user() {
        this.userService.update('10', '1', '1')
            .toPromise()
            .then(res => {
                this.title8 = JSON.stringify(res);
            });
    }

    ngOnInit() {}
}
