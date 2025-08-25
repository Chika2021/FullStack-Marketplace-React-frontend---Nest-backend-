import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createProductDto: CreateProductDto, @Request() req ) {
    const user = req.user
    return await this.productsService.create(createProductDto, user);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Request() req) {
    // const user = req.user
    // console.log(user)
    return await this.productsService.findAll();
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: number) {

    return await this.productsService.findOne(id);
  }
  
  // @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    // const user = req.user
    return await this.productsService.update(+id, updateProductDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.productsService.remove(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  async format() {
    return await this.productsService.format();
  }
}
