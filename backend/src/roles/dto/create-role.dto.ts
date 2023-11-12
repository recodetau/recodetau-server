import { IsString, Length } from "class-validator";

export class CreateRoleDto {
    @IsString()
    @Length(2, 30)
    readonly name: string;
}
