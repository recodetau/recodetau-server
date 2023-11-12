import {
    IsString,
    Length,
    IsInt,
    IsDateString,
    IsBoolean,
    IsOptional,
} from "class-validator";

export class UpdateCourseDto {
    @IsString()
    @Length(2, 255)
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsString()
    @Length(2, 255)
    readonly image_url: string;

    @IsInt()
    readonly price: number;

    @IsInt()
    readonly tag_id: number;

    @IsDateString()
    beginned_at: Date;

    @IsDateString()
    @IsOptional()
    finished_at: Date;

    @IsBoolean()
    is_online_payment: boolean;

    @IsString()
    @IsOptional()
    payment_url: string;
}
