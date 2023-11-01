import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

import { User } from "./models/users.model";
import { UserEmailVerify } from "./models/user-email-verify.model";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [SequelizeModule.forFeature([User, UserEmailVerify])],
    exports: [UsersService],
})
export class UsersModule {}
