import { IsString, Length } from "class-validator";

export class UpdateRoleDto {
    @IsString()
    @Length(2, 30)
    readonly name: string;
}
