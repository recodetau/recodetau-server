import { join as joinpath } from "path";

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ThrottlerModule } from "@nestjs/throttler";

import { CreateDatabaseModule } from "./database.module";
import { CreateRouterModule } from "./router";

import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { CoursesModule } from "./courses/courses.module";
import { TagsModule } from "./tags/tags.module";
import { PostsModule } from "./posts/posts.module";

@Module({
    providers: [],
    controllers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV || "production"}.env`,
        }),

        ThrottlerModule.forRoot([
            {
                ttl: 1000,
                limit: 100,
            },
        ]),

        ServeStaticModule.forRoot({
            rootPath: joinpath(__dirname, "..", "public"),
            renderPath: "/",
        }),

        ServeStaticModule.forRoot({
            rootPath: joinpath(__dirname, "..", "uploads"),
            renderPath: "/uploads",
        }),

        CreateDatabaseModule(),
        CreateRouterModule(),

        AuthModule,
        UsersModule,
        CoursesModule,
        TagsModule,
        PostsModule,
    ],
})
export class AppModule {}
