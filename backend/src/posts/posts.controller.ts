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
    async createPost(@Body() createPostDto: CreatePostDto) {
        return await this.postsService.createPost(createPostDto);
    }

    @Patch(":id")
    async updatePost(
        @Param("id", ParseIntPipe) postID: number,
        @Body() updatePostDto: UpdatePostDto,
    ) {
        return await this.postsService.updatePost(postID, updatePostDto);
    }

    @Delete(":id")
    async removePost(@Param("id", ParseIntPipe) postID: number) {
        return await this.postsService.removePost(postID);
    }
}
