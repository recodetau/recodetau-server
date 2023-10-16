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

import { User } from "@/users/users.model";

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    @AllowUnauthorizedRequest()
    async login(@Body() dto: AuthLoginDto): Promise<string> {
        return this.authService.login(dto);
    }

    @Post("logout")
    @HttpCode(HttpStatus.NO_CONTENT)
    async logout(@Request() request: AuthenticatedRequest): Promise<void> {
        return this.authService.logout(request.user);
    }

    @Post("registration")
    @AllowUnauthorizedRequest()
    async registration(@Body() dto: AuthRegistrationDto): Promise<User> {
        return this.authService.registration(dto);
    }
}
