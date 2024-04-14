import { RouterModule } from "@nestjs/core";
import { DynamicModule } from "@nestjs/common";

import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { CompaniesModule } from "@/companies/companies.module";
import { CreditsModule } from "@/credits/credits.module";

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
                    path: "companies",
                    module: CompaniesModule,
                },
                {
                    path: "credits",
                    module: CreditsModule,
                },
            ],
        },
    ]);
};
