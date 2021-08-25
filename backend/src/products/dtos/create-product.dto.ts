import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator"

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    description:string

    @IsNumber()
    @Min(0)
    price:number

    @IsNumber()
    @Min(0)
    quantity:number
}