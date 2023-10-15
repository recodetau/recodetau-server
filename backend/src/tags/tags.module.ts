import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { TagsService } from "./tags.service";
import { TagsController } from "./tags.controller";

import { Tag } from "./tags.model";

@Module({
    controllers: [TagsController],
    providers: [TagsService],
    imports: [SequelizeModule.forFeature([Tag])],
})
export class TagsModule {}
