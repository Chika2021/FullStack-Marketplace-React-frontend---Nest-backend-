import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { DeleteResult, Repository } from 'typeorm';
import { User } from 'src/user/model/user.model';

import * as dotenv from 'dotenv';
dotenv.config();
import * as Paystack from 'paystack-api';
// console.log('PAYSTACK_SECRET_KEY (service):', process.env.PAYSTACK_SECRET_KEY);
const paystack = Paystack(process.env.PAYSTACK_SECRET_KEY);

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) { }

  async create(createProductDto: CreateProductDto, user: User): Promise<Product> {
    return await this.productRepository.save({ ...createProductDto, user })
  }

  async findAll(): Promise<Product[]> {
    // return await this.productRepository.find({where: {user: {id: user.id}}});
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    return await this.productRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productRepository.update(id, updateProductDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.productRepository.delete({ id })
  }

  async format(): Promise<DeleteResult> {
    return await this.productRepository.deleteAll()
  }

  /**
   * Initialize Paystack transaction for product purchase
   * @param amount Amount in Naira
   * @param email Buyer's email
   * @param productId Product being purchased
   */
  async initializePayment(email: string, amount: number, productId: number) {
    // Use the amount from the frontend
    const koboAmount = amount * 100;
    const response = await paystack.transaction.initialize({
      amount: koboAmount,
      email,
      metadata: {
        productId,
        // ...other metadata
      },
    });
    return response;
  }

  /**
   * Verify Paystack transaction
   * @param reference Transaction reference
   */
  async verifyPayment(reference: string) {
    const response = await paystack.transaction.verify({ reference });
    return response;
  }

}
