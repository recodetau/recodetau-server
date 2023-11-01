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

import { PostsService } from "./posts.service";

import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Controller()
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get(":id")
    async getPost(@Param("id", ParseIntPipe) postID: number) {
        return await this.postsService.getPost(postID);
    }

    @Get()
    async getAllPosts() {
        return await this.postsService.getAllPosts();
    }

    @Post()
    @Roles(CompanyRole.Owner, CompanyRole.Administrator, CompanyRole.Redactor)
    async createPost(@Body() createPostDto: CreatePostDto) {
        return await this.postsService.createPost(createPostDto);
    }

    @Patch(":id")
    @Roles(CompanyRole.Owner, CompanyRole.Administrator, CompanyRole.Redactor)
    async updatePost(
        @Param("id", ParseIntPipe) postID: number,
        @Body() updatePostDto: UpdatePostDto,
    ) {
        return await this.postsService.updatePost(postID, updatePostDto);
    }

    @Delete(":id")
    @Roles(CompanyRole.Owner, CompanyRole.Administrator, CompanyRole.Redactor)
    async removePost(@Param("id", ParseIntPipe) postID: number) {
        return await this.postsService.removePost(postID);
    }
}
