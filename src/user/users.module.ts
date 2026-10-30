import {Module} from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';
import { AdminService } from '../admin/admin.service.js';
import { AdminModule } from '../admin/admin.module.js';
import {AdminController} from '../admin/admin.controller.js';

@Module({
  controllers: [UsersController, AdminController],
  providers: [UsersService, AdminService],
  imports: [AdminModule],
})
export class UsersModule {}