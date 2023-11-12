import { IsString, Length } from "class-validator";

export class AuthLoginDto {
    @IsString()
    @Length(2, 50)
    readonly email: string;

    @IsString()
    @Length(4, 255)
    readonly password: string;
}
