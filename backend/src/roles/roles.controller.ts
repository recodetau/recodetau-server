import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    Body,
    ParseIntPipe,
} from "@nestjs/common";

import { RolesService } from "./roles.service";

import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";

import { Roles } from "./decorators/roles-auth.decorator";
import { CompanyRole } from "./user-role.model";

@Controller()
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Get()
    async getAllRoles() {
        return await this.rolesService.getAllRoles();
    }

    @Get(":id")
    async getRoleByID(@Param("id", ParseIntPipe) roleID: number) {
        return await this.rolesService.getRoleByID(roleID);
    }

    @Post()
    @Roles(CompanyRole.Owner, CompanyRole.Administrator)
    async createRole(@Body() createRoleDto: CreateRoleDto) {
        return await this.rolesService.createRole(createRoleDto);
    }

    @Patch(":id")
    @Roles(CompanyRole.Owner, CompanyRole.Administrator)
    async updateRole(
        @Param("id", ParseIntPipe) roleID: number,
        @Body() updateRoleDto: UpdateRoleDto,
    ) {
        return await this.rolesService.updateRole(roleID, updateRoleDto);
    }

    @Delete(":id")
    @Roles(CompanyRole.Owner, CompanyRole.Administrator)
    async deleteRole(@Param("id", ParseIntPipe) roleID: number) {
        return await this.rolesService.deleteRole(roleID);
    }
}
