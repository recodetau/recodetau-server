import { IsString, Length, IsEmail } from "class-validator";

export class UpdateUserDto {
    @IsString()
    @Length(2, 30)
    readonly first_name: string;

    @IsString()
    @Length(2, 30)
    readonly last_name: string;

    @Length(2, 50)
    @IsEmail()
    readonly email: string;

    @IsString()
    @Length(0, 30)
    readonly phone: string;

    @IsString()
    @Length(0, 255)
    readonly about_me: string;
}
