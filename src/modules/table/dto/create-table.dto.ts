import { IsString, IsNotEmpty, IsNumber } from "class-validator";
export class CreateTableDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    workspaceId: number;

    @IsNumber()
    @IsNotEmpty()
    position: number;

}
