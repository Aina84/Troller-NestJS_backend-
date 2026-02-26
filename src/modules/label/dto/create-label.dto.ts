import {IsString, IsNumber, IsNotEmpty} from "class-validator"

export class CreateLabelDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsNumber()
    @IsNotEmpty()
    workspaceId: number;
}
