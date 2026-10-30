import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    findAll() {
        return {
            sucess: true,
            message: 'Products fetched successfully'
        };
    }
    @Get('profile')
    getProfile() {
        return "Products profile fetched successfully";
    }
}
