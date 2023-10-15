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

import { CourseFollowersService } from "./course-followers.service";

import { User } from "@/decorators/user.decorator";
import { User as UserModel } from "@/users/users.model";
import { CourseFollower } from "./course-followers.model";

@Controller("followers")
export class CourseFollowersController {
    constructor(
        private readonly courseFollowersService: CourseFollowersService,
    ) {}

    @Get()
    async getAllCourseFollowers() {}

    @Post("/:id")
    async followCourse(
        @Param("id", ParseIntPipe) courseID: number,
        @User() user: UserModel,
    ): Promise<CourseFollower> {
        return this.courseFollowersService.followCourse(courseID, user);
    }
}
