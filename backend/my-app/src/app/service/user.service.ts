import {Injectable} from '@angular/core';
import {User} from '../classes/User';
import {USERS} from '../mock/user.data';

@Injectable()
export class UserService {
    getUsers(): User[] {
        return USERS;
    }
}
