import { DynamicModule } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { User } from "./users/users.model";
import { Course } from "./courses/courses.model";
import { Tag } from "./tags/tags.model";
import { Post } from "./posts/posts.model";

export const CreateDatabaseModule = (): DynamicModule => {
    return SequelizeModule.forRoot({
        dialect: "postgres",

        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),

        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: false,

        models: [User, Course, Post, Tag],
    });
};