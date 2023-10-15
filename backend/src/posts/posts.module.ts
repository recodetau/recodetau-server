import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";

import { Post } from "./posts.model";

@Module({
    controllers: [PostsController],
    providers: [PostsService],
    imports: [SequelizeModule.forFeature([Post])],
})
export class PostsModule {}
