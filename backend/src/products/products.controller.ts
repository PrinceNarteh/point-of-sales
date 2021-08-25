import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    
    @Get()
    getAllProducts() {
        return "All Products"
    }

    @Get(":id")
    getProduct(@Param("id") id:string){
        return `Single Product - ${id}`
    }

    @Post()
    createProduct() {
        return "Create Product"
    }

    @Patch(":id")
    updateProduct(@Param('id') id:string) {
        return `Update Product - ${id}`
    }

    @Delete(":id")
    deleteProduct(@Param('id') id:string) {
        return `Delete Product - ${id}`
    }
}
