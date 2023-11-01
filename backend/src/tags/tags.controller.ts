import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
} from "@nestjs/common";

import { Roles } from "@/roles/decorators/roles-auth.decorator";
import { CompanyRole } from "@/roles/user-role.model";

import { TagsService } from "./tags.service";

import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";

@Controller()
export class TagsController {
    constructor(private readonly tagsService: TagsService) {}

    @Get()
    public async getAllTags() {
        return this.tagsService.getAllTags();
    }

    @Get(":id")
    public async getTag(@Param("id", ParseIntPipe) tagID: number) {
        return this.tagsService.getTag(tagID);
    }

    @Post()
    @Roles(CompanyRole.Owner, CompanyRole.Administrator, CompanyRole.Redactor)
    public async createTag(@Body() createTagDto: CreateTagDto) {
        return this.tagsService.createTag(createTagDto);
    }

    @Patch(":id")
    @Roles(CompanyRole.Owner, CompanyRole.Administrator, CompanyRole.Redactor)
    public async updateTag(
        @Param("id", ParseIntPipe) tagID: number,
        @Body() updateTagDto: UpdateTagDto,
    ) {
        return this.tagsService.updateTag(tagID, updateTagDto);
    }

    @Delete(":id")
    @Roles(CompanyRole.Owner, CompanyRole.Administrator, CompanyRole.Redactor)
    public async removeTag(@Param("id", ParseIntPipe) tagID: number) {
        return this.tagsService.removeTag(tagID);
    }
}
