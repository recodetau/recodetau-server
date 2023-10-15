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
    public async createTag(@Body() createTagDto: CreateTagDto) {
        return this.tagsService.createTag(createTagDto);
    }

    @Patch(":id")
    public async updateTag(
        @Param("id", ParseIntPipe) tagID: number,
        @Body() updateTagDto: UpdateTagDto,
    ) {
        return this.tagsService.updateTag(tagID, updateTagDto);
    }

    @Delete(":id")
    public async removeTag(@Param("id", ParseIntPipe) tagID: number) {
        return this.tagsService.removeTag(tagID);
    }
}
