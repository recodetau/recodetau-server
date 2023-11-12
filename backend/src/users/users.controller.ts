import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
    Req,
    HttpCode,
    HttpStatus,
} from "@nestjs/common";
import { Request } from "express";

import { UsersService } from "./users.service";

import { UpdateUserDto } from "./dto/update-user.dto";

import { User as UserModel } from "./models/users.model";
import { User } from "@/users/decorators/user.decorator";
import { AllowUnauthorizedRequest } from "@/auth/decorators/allow-unauthorized-request.decorator";

import { Roles } from "@/roles/decorators/roles-auth.decorator";
import { CompanyRole } from "@/roles/user-role.model";
import { UserBanDto } from "./dto/user-ban.dto";

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get("me")
    async getCurrentUser(@User() user: UserModel) {
        return user;
    }

    @Get("email-verify")
    @HttpCode(HttpStatus.NO_CONTENT)
    @AllowUnauthorizedRequest()
    async userEmailVerify(@Req() request: Request) {
        const { key } = request.params;

        return await this.usersService.userEmailVerify(key);
    }

    @Get(":id")
    @Roles(CompanyRole.Owner, CompanyRole.Administrator)
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

    @Post("ban/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    @Roles(CompanyRole.Owner, CompanyRole.Administrator, CompanyRole.Moderator)
    async banUser(
        @Param("id", ParseIntPipe) userID: number,
        @Body() userBanDto: UserBanDto,
    ) {
        return await this.usersService.userBanned(
            userID,
            userBanDto.ban_reason,
        );
    }

    @Post("unban/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    @Roles(CompanyRole.Owner, CompanyRole.Administrator, CompanyRole.Moderator)
    async unbanUser(@Param("id", ParseIntPipe) userID: number) {
        return await this.usersService.userUnbanned(userID);
    }
}
