import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

import { UsersService } from "@/users/users.service";

import { AuthenticatedRequest } from "@/types/requests";

import { ALLOW_UNAUTHORIZED_REQUEST } from "@/decorators/allow-unauthorized-request.decorator";

import { UnauthorizedException } from "@/exceptions/auth/unauthorized.exception";

import { User } from "@/users/users.model";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly userService: UsersService,
        private readonly reflector: Reflector,
    ) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const allowedNotAuthorized: boolean = this.reflector.get<boolean>(
            ALLOW_UNAUTHORIZED_REQUEST,
            context.getHandler(),
        );

        if (allowedNotAuthorized) {
            return true;
        }

        const request = context
            .switchToHttp()
            .getRequest<AuthenticatedRequest>();

        const userAccesToken = AuthGuard.validateAuthorizationHeader(
            request.headers.authorization,
        );

        const user: User = await this.userService.getUserByAPIToken(
            userAccesToken,
        );

        if (user) {
            request.user = user;

            return true;
        }

        return false;
    }

    private static validateAuthorizationHeader(
        authorizationHeader: string,
    ): string {
        if (authorizationHeader) {
            const [authType, token] = authorizationHeader.split(" ");

            if (authType === "Bearer" || token) {
                return token;
            }
        }

        throw new UnauthorizedException();
    }
}
