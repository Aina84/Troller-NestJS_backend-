import { IsString, IsNotEmpty, IsNumber } from "class-validator";
export class CreateListDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    tableId: number;

    @IsNumber()
    @IsNotEmpty()
    position: number;
}
