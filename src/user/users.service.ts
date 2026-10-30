import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  getUsers() {
    return 'Rahul , Rohit , Hardik';
  }
}