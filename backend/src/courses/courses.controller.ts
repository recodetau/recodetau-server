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

import { Course } from "./models/courses.model";
import { CoursesService } from "./courses.service";

import { CreateCourseDto } from "./dto/create-course.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";

import { Roles } from "@/roles/decorators/roles-auth.decorator";
import { CompanyRole } from "@/roles/user-role.model";

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
    @Roles(CompanyRole.Owner, CompanyRole.Administrator)
    async createCourse(
        @Body() createCourseDto: CreateCourseDto,
    ): Promise<Course> {
        return this.coursesService.createCourse(createCourseDto);
    }

    @Patch(":id")
    @Roles(CompanyRole.Owner, CompanyRole.Administrator)
    async updateCourse(
        @Param("id", ParseIntPipe) courseID: number,
        @Body() updateCourseDto: UpdateCourseDto,
    ): Promise<Course> {
        return this.coursesService.updateCourse(courseID, updateCourseDto);
    }

    @Delete(":id")
    @Roles(CompanyRole.Owner, CompanyRole.Administrator)
    async removeCourse(
        @Param("id", ParseIntPipe) courseID: number,
    ): Promise<void> {
        return this.coursesService.removeCourse(courseID);
    }
}
