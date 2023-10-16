import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
} from "@nestjs/common";

import { UsersService } from "./users.service";

import { UpdateUserDto } from "./dto/update-user.dto";

import { User } from "@/users/decorators/user.decorator";
import { User as UserModel } from "./users.model";

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get("me")
    async getCurrentUser(@User() user: UserModel) {
        return user;
    }

    @Get(":id")
    async getUser(@Param("id", ParseIntPipe) userID: number) {
        return await this.usersService.getUserByID(userID);
    }

    @Post("update")
    async updateUser(
        @User() user: UserModel,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        return await this.usersService.updateCurrentUser(user, updateUserDto);
    }
}
