import { RouterModule } from "@nestjs/core";
import { DynamicModule } from "@nestjs/common";

import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { CoursesModule } from "./courses/courses.module";
import { TagsModule } from "./tags/tags.module";
import { PostsModule } from "./posts/posts.module";

export const CreateRouterModule = (): DynamicModule => {
    return RouterModule.register([
        {
            path: "api",
            children: [
                {
                    path: "auth",
                    module: AuthModule,
                },
                {
                    path: "users",
                    module: UsersModule,
                },
                {
                    path: "courses",
                    module: CoursesModule,
                },
                {
                    path: "posts",
                    module: PostsModule,
                },
                {
                    path: "tags",
                    module: TagsModule,
                },
            ],
        },
    ]);
};
