import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { Post } from "./models/posts.model";

import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post) private readonly postModel: typeof Post) {}

    async getAllPosts(): Promise<Post[]> {
        const posts: Post[] = await this.postModel.findAll();

        return posts;
    }

    async getPost(postID: number): Promise<Post> {
        const post: Post = await this.postModel.findOne({
            where: {
                id: postID,
            },
        });

        return post;
    }

    async createPost(createPostDto: CreatePostDto): Promise<Post> {
        const post: Post = await this.postModel.create(createPostDto);

        return post;
    }

    async updatePost(
        postID: number,
        updatePostDto: UpdatePostDto,
    ): Promise<Post> {
        const post: Post = await this.getPost(postID);

        return await post.update(updatePostDto);
    }

    async removePost(postID: number): Promise<void> {
        const post: Post = await this.getPost(postID);

        await post.destroy();
    }
}
