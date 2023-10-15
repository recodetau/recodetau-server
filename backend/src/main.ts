import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

import { AuthGuard } from "./auth/auth.guard";

import { UsersService } from "./users/users.service";
import { Reflector } from "@nestjs/core";

import { RequestValidationPipe } from "./pipes/request-validation.pipe";

(async () => {
    const app = await NestFactory.create(AppModule);

    app.useGlobalGuards(
        new AuthGuard(app.get(UsersService), app.get(Reflector)),
    );
    app.useGlobalPipes(new RequestValidationPipe());

    app.enableCors();

    await app.listen(process.env.PORT, "0.0.0.0", function () {
        console.log(`Server started to port ${process.env.PORT}!`);
    });
})();
