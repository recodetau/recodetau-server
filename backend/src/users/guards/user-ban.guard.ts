import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

import { AuthenticatedRequest } from "@/types/requests";

import { UnauthorizedException } from "@/auth/exceptions/unauthorized.exception";
import { BannedException } from "../exceptions/banned.exception";

import { User } from "@/users/models/users.model";

@Injectable()
export class UserBanGuard implements CanActivate {
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context
            .switchToHttp()
            .getRequest<AuthenticatedRequest>();

        const user: User = request.user;

        if (!user) {
            return true;
        }

        if (user.banned) {
            throw new BannedException(user.ban_reason);
        }

        return true;
    }
}
