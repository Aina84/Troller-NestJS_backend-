import {IsString, IsNotEmpty, IsNumber, Min, IsBoolean} from "class-validator"
export class CreateChecklistitemDto {
    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    checklistId: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsBoolean()
    isDone: boolean;
}
