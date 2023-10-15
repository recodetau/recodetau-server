import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { CreateCourseDto } from "./dto/create-course.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";

import { Course } from "./courses.model";
import { User } from "@/users/users.model";
import { CourseFollower } from "./followers/course-followers.model";

@Injectable()
export class CoursesService {
    constructor(
        @InjectModel(Course) private readonly courseModel: typeof Course,
    ) {}

    async getAllCource(): Promise<Course[]> {
        const courses: Course[] = await this.courseModel.findAll();

        return courses;
    }

    async getCource(courseID: number): Promise<Course> {
        const course: Course = await this.courseModel.findOne({
            where: {
                id: courseID,
            },
            include: {
                all: true,
            },
        });

        return course;
    }

    async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
        const course: Course = await this.courseModel.create(createCourseDto);

        return course;
    }

    async updateCourse(
        courseID: number,
        updateCourseDto: UpdateCourseDto,
    ): Promise<Course> {
        const course: Course = await this.getCource(courseID);

        return await course.update(updateCourseDto);
    }

    async removeCourse(courseID: number): Promise<void> {
        const course: Course = await this.getCource(courseID);

        await course.destroy();
    }
}
