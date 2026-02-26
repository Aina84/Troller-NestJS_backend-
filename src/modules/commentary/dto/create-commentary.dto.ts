import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCommentaryDto {
    @IsNumber()
    @IsNotEmpty()
    cardId: number;

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsString()
    @IsNotEmpty()
    content: string;
}
