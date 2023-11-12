import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

import { AuthGuard } from "./auth/guards/auth.guard";

import { UsersService } from "./users/users.service";
import { Reflector } from "@nestjs/core";

import { RequestValidationPipe } from "./pipes/request-validation.pipe";
import { UserBanGuard } from "./users/guards/user-ban.guard";
import { RolesGuard } from "./roles/guards/roles.guard";

(async () => {
    const app = await NestFactory.create(AppModule);

    app.useGlobalGuards(
        new AuthGuard(app.get(UsersService), app.get(Reflector)),
    );
    app.useGlobalGuards(new UserBanGuard());
    app.useGlobalGuards(new RolesGuard(app.get(Reflector)));

    app.useGlobalPipes(new RequestValidationPipe());

    app.enableCors();

    await app.listen(process.env.BACKEND_PORT, "0.0.0.0", () => {
        console.log(`Server started to port ${process.env.BACKEND_PORT}!`);
    });
})();
