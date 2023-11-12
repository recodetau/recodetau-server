import {
    Body,
    Controller,
    HttpCode,
    Post,
    Request,
    HttpStatus,
} from "@nestjs/common";

import { AuthService } from "./auth.service";
import { AuthenticatedRequest } from "@/types/requests";

import { AuthLoginDto } from "./dto/auth-login.dto";
import { AuthRegistrationDto } from "./dto/auth-registration.dto";

import { AllowUnauthorizedRequest } from "@/auth/decorators/allow-unauthorized-request.decorator";

import { User } from "@/users/models/users.model";

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    @AllowUnauthorizedRequest()
    async login(@Body() dto: AuthLoginDto): Promise<string> {
        console.log(23);
        return await this.authService.login(dto);
    }

    @Post("logout")
    @HttpCode(HttpStatus.NO_CONTENT)
    async logout(@Request() request: AuthenticatedRequest): Promise<void> {
        return await this.authService.logout(request.user);
    }

    @Post("registration")
    @HttpCode(HttpStatus.NO_CONTENT)
    @AllowUnauthorizedRequest()
    async registration(@Body() dto: AuthRegistrationDto): Promise<User> {
        return await this.authService.registration(dto);
    }
}
