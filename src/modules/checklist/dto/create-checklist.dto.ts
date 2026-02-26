import {IsString, IsNotEmpty, IsNumber, Min} from "class-validator"

export class CreateChecklistDto {
    @IsNumber()
    @Min(0)
    cardId: number;
    
    @IsString()
    @IsNotEmpty()
    title: string;
}
