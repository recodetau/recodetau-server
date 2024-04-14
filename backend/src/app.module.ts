import { Module } from "@nestjs/common";

import { CreateDatabaseModule } from "./database.module";
import { CreateRouterModule } from "./router";

import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { CompaniesModule } from "./companies/companies.module";
import { CreditsModule } from "./credits/credits.module";

@Module({
    providers: [],
    controllers: [],
    imports: [
        CreateDatabaseModule(),
        CreateRouterModule(),

        AuthModule,
        UsersModule,
        CompaniesModule,
        CreditsModule,
    ],
})
export class AppModule {}
