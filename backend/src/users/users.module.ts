import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { RolesController } from "./roles/roles.controller";
import { RolesService } from "./roles/roles.service";

import { User } from "./users.model";
import { Role } from "./roles/roles.model";
import { UserRole } from "./roles/user-role.model";

@Module({
    controllers: [UsersController, RolesController],
    providers: [UsersService, RolesService],
    imports: [SequelizeModule.forFeature([User, Role, UserRole])],
    exports: [UsersService, RolesService],
})
export class UsersModule {}
