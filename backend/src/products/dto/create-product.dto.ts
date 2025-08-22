import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @Type(() => Number)
    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
    readonly imageUrl: string;
    
    // Uncomment if you want to associate a user with the product
    // userId: number; // Assuming you want to link the product to a user
}
