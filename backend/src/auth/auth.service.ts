import * as bcrypt from "bcryptjs";
import { Injectable } from "@nestjs/common";

import { AuthLoginDto } from "./dto/auth-login.dto";
import { AuthRegistrationDto } from "./dto/auth-registration.dto";

import { UsersService } from "@/users/users.service";

import { User } from "@/users/users.model";

import { AuthorizationException } from "@/exceptions/auth/authorization.exception";
import { BearerToken } from "@/utilities/bearer-token";
import { HasUserException } from "@/exceptions/auth/has-user.exception";

@Injectable()
export class AuthService {
    public constructor(private readonly usersService: UsersService) {}

    public async login(authLoginDto: AuthLoginDto) {
        const user: User = await this.validateUser(authLoginDto);

        return await this.validateAPIToken(user);
    }

    public async logout(user: User) {
        user.removeTokenOptions();
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

    private async validateAPIToken(user: User) {
        if (BearerToken.validateTokenLife(user) === false) {
            user.updateTokenOptions();

            await user.save();
        }

        return user.token;
    }

    private async validateUser(dto: AuthLoginDto): Promise<User> {
        const user = await this.usersService.getUserByEmail(dto.email);

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
