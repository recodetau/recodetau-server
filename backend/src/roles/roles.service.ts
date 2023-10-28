import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { Role } from "./roles.model";

import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private readonly roleModel: typeof Role) {}

    async getAllRoles(): Promise<Role[]> {
        const roles: Role[] = await this.roleModel.findAll();

        return roles;
    }

    async getRoleByID(roleID: number) {
        const role: Role = await this.roleModel.findOne({
            where: {
                id: roleID,
            },
        });

        return role;
    }

    async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
        const role: Role = await this.roleModel.create(createRoleDto);

        return role;
    }

    async updateRole(
        roleID: number,
        updateRoleDto: UpdateRoleDto,
    ): Promise<Role> {
        const role: Role = await this.getRoleByID(roleID);

        return await role.update(updateRoleDto);
    }

    async deleteRole(roleID: number): Promise<void> {
        const role: Role = await this.getRoleByID(roleID);

        await role.destroy();
    }
}
