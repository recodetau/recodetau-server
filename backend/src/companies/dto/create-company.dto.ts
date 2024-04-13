import {
    IsString,
    Length,
    IsInt,
    IsOptional,
    IsBoolean,
} from "class-validator";

export class CreateCompanyDto {
    @IsString()
    @Length(2, 255)
    readonly name: string;

    @IsString()
    @Length(1, 30)
    readonly inn: string;

    @IsInt()
    @IsOptional()
    readonly ownerID?: number;

    @IsString()
    @Length(2, 30)
    readonly creditCard: string;

    @IsInt()
    readonly typeID: number;

    @IsBoolean()
    readonly isOwner: boolean;
}
