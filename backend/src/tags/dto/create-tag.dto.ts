import { IsString, Length } from "class-validator";

export class CreateTagDto {
    @IsString()
    @Length(2, 30)
    name: string;

    @IsString()
    @Length(3, 255)
    short_description: string;
}
