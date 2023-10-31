import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException,
} from "@nestjs/common";

import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../decorators/roles-auth.decorator";
import { AuthenticatedRequest } from "@/types/requests";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        try {
            const requiredRoles = this.reflector.getAllAndOverride<string[]>(
                ROLES_KEY,
                [context.getHandler(), context.getClass()],
            );

            if (!requiredRoles) {
                return true;
            }

            const request = context
                .switchToHttp()
                .getRequest<AuthenticatedRequest>();

            if (!request.user) {
                throw new UnauthorizedException({
                    message: "Пользователь не авторизован",
                });
            }

            return request.user.roles.some((role) =>
                requiredRoles.includes(role.name),
            );
        } catch (error) {
            console.log(error);
            throw new HttpException("Нет доступа", HttpStatus.FORBIDDEN);
        }
    }
}
