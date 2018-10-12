import { Injectable } from '@angular/core';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() : User[]{
    return [
      {id : 1, name : 'user1'},
      {id : 2, name : 'user2'}, 
      {id : 3, name : 'user3'},   
          ];
  }
}
