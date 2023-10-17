import { Controller, Post, Body } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";

@Controller()
export class RoleController {
    @Post()
    async create(@Body() createRoleDto: CreateRoleDto) {}
}
