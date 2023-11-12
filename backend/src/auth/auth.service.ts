import * as bcrypt from "bcryptjs";
import { Injectable } from "@nestjs/common";

import { AuthLoginDto } from "./dto/auth-login.dto";
import { AuthRegistrationDto } from "./dto/auth-registration.dto";

import { User } from "@/users/models/users.model";
import { UsersService } from "@/users/users.service";

import { AuthorizationException } from "@/auth/exceptions/authorization.exception";
import { HasUserException } from "@/auth/exceptions/has-user.exception";

@Injectable()
export class AuthService {
    public constructor(private readonly usersService: UsersService) {}

    public async login(authLoginDto: AuthLoginDto) {
        const user: User = await this.validateUser(authLoginDto);

        user.login();
        await user.save();

        return user.token;
    }

    public async logout(user: User) {
        user.logout();
        await user.save();
    }

    public async registration(authRegistrationDto: AuthRegistrationDto) {
        const user = await this.usersService.getUserByEmail(
            authRegistrationDto.email,
        );

        if (user) {
            throw new HasUserException();
        }

        return await this.usersService.createUser(authRegistrationDto);
    }

    private async validateUser(dto: AuthLoginDto): Promise<User> {
        const user = await this.usersService.getUserByEmail(dto.email);

        console.log(user);

        if (user) {
            const passwordEquals = await bcrypt.compare(
                dto.password,
                user.password,
            );

            if (passwordEquals) {
                return user;
            }
        }

        throw new AuthorizationException();
    }
}
