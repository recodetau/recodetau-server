import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";

import { Role } from "./roles.model";
import { UserRole } from "./user-role.model";

@Module({
    controllers: [RolesController],
    providers: [RolesService],
    imports: [SequelizeModule.forFeature([Role, UserRole])],
    exports: [],
})
export class RolesModule {}
