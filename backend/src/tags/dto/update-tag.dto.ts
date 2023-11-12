import { IsString, Length } from "class-validator";

export class UpdateTagDto {
    @IsString()
    @Length(2, 30)
    name: string;
}
