import { IsString, Length, IsInt } from "class-validator";

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
}
