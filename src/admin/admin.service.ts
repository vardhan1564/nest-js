import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {

    getUsers() {
        return 'Admin Service: Rahul , Rohit , Hardik';
    }
}
