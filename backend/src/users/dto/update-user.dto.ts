import { IsString, Length } from "class-validator";

export class UpdateUserDto {
    @IsString()
    @Length(2, 30)
    readonly first_name: string;

    @IsString()
    @Length(2, 30)
    readonly last_name: string;
}
