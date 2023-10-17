import { IsString, Length } from "class-validator";

export class UpdateRoleDto {
    @IsString()
    @Length(2, 30)
    readonly name: string;

    @IsString()
    @Length(1, 255)
    readonly short_description: string;
}
