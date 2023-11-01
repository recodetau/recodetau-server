import { IsString, IsOptional, Length } from "class-validator";

export class UserBanDto {
    @IsOptional()
    @IsString()
    @Length(1, 255)
    readonly ban_reason: string;
}
