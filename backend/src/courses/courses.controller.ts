import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
} from "@nestjs/common";

import { CoursesService } from "./courses.service";

import { Course } from "./courses.model";

import { CreateCourseDto } from "./dto/create-course.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";

@Controller()
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @Get()
    async getAllCource(): Promise<Course[]> {
        return this.coursesService.getAllCource();
    }

    @Get(":id")
    async getCource(
        @Param("id", ParseIntPipe) courseID: number,
    ): Promise<Course> {
        return this.coursesService.getCource(courseID);
    }

    @Post()
    async createCourse(
        @Body() createCourseDto: CreateCourseDto,
    ): Promise<Course> {
        return this.coursesService.createCourse(createCourseDto);
    }

    @Patch(":id")
    async updateCourse(
        @Param("id", ParseIntPipe) courseID: number,
        @Body() updateCourseDto: UpdateCourseDto,
    ): Promise<Course> {
        return this.coursesService.updateCourse(courseID, updateCourseDto);
    }

    @Delete(":id")
    async removeCourse(
        @Param("id", ParseIntPipe) courseID: number,
    ): Promise<void> {
        return this.coursesService.removeCourse(courseID);
    }
}
