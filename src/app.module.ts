import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './user/users.module.js';
import { UsersController } from './user/users.controller.js';
import { ProductsModule } from './products/products.module.js';
import { ProductsController } from './products/products.controller.js';
import { AdminModule } from './admin/admin.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports:[UsersModule, ProductsModule, AdminModule],
  controllers: [AppController, UsersController, ProductsController],
  providers: [AppService],
  exports:[]
})

export class AppModule {}
