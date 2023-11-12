import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { CoursesService } from "../courses.service";

import { User } from "@/users/models/users.model";
import { Course } from "../models/courses.model";
import { CourseFollower } from "./course-followers.model";

import { CreateCourseFollower } from "./dto/create-course-follower.dto";
import { UpdateCourseFollower } from "./dto/update-course-follower.dto";

import { CourseFollowerCreationAttributes } from "./course-followers.model";

@Injectable()
export class CourseFollowersService {
    constructor(
        private readonly courseService: CoursesService,

        @InjectModel(CourseFollower)
        private readonly courseFollowerModel: typeof CourseFollower,
    ) {}

    async followCourse(courseID: number, user: User): Promise<CourseFollower> {
        const course: Course = await this.courseService.getCource(courseID);

        const followerOptions: CourseFollowerCreationAttributes = {
            course_id: course.id,
            user_id: user.id,
        };

        const follower = await this.courseFollowerModel.create(followerOptions);

        return follower;
    }
}
