import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProductDto extends PartialType(CreateProductDto) {
        @IsString()
        @IsOptional()
        readonly name: string;
    
        @IsString()
        @IsOptional()
        readonly description: string;
        
        @Type(() => Number)
        @IsNumber()
        @IsOptional()
        readonly price: number;

      
        @IsOptional()
        readonly imageUrl: string;
}
