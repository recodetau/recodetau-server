import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    HttpCode,
    HttpStatus,
} from "@nestjs/common";

import { UsersService } from "./users.service";

import { UpdateUserDto } from "./dto/update-user.dto";

import { User as UserModel } from "./models/users.model";
import { User } from "@/users/decorators/user.decorator";

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

    @Patch()
    @HttpCode(HttpStatus.NO_CONTENT)
    async updateUser(
        @User() user: UserModel,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        return await this.usersService.updateCurrentUser(user, updateUserDto);
    }
}
