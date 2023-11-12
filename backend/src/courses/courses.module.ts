import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { CoursesService } from "./courses.service";
import { CoursesController } from "./courses.controller";

import { CourseFollowersController } from "./followers/course-followers.controller";
import { CourseFollowersService } from "./followers/course-followers.service";

import { Course } from "./models/courses.model";
import { CourseFollower } from "./followers/course-followers.model";

@Module({
    controllers: [CoursesController, CourseFollowersController],
    providers: [CoursesService, CourseFollowersService],
    imports: [SequelizeModule.forFeature([Course, CourseFollower])],
})
export class CoursesModule {}
