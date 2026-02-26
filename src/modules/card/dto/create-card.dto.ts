import { IsDateString, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateCardDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    listId: number;

    @IsDateString()
    @IsNotEmpty()
    dueDate: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    position: number;
}
