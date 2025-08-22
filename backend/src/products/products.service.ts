import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { DeleteResult, Repository } from 'typeorm';
import { User } from 'src/user/model/user.model';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>){}

  async create(createProductDto: CreateProductDto, user: User):Promise<Product> {
    return await this.productRepository.save({...createProductDto, user})
  }

  async findAll():Promise<Product[]> {
    // return await this.productRepository.find({where: {user: {id: user.id}}});
    return await this.productRepository.find();
  }

  async findOne(id:number) {
    return await this.productRepository.findOne({where: {id} });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productRepository.update(id , updateProductDto);
  }

  async remove(id: number):Promise<DeleteResult> {
    return await this.productRepository.delete({id})
  }

  async format():Promise<DeleteResult> {
    return await this.productRepository.deleteAll()
  }

}
