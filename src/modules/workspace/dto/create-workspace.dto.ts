import { IsString, IsNotEmpty, IsDate, IsNumber } from "class-validator";

export class CreateWorkspaceDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    ownerId: number;
}
