import { DynamicModule } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { User } from "@/users/models/users.model";
import { UserToken } from "@/users/models/user-tokens.model";

import { Company } from "@/companies/models/componies.model";
import { CompanyType } from "@/companies/models/company-types.model";
import { CompanyOwner } from "@/companies/models/company-owner.model";
import { CreditType } from "@/credits/models/credit-type.model";
import { CreditScheme } from "@/credits/models/credit-schemes.model";

export const CreateDatabaseModule = (): DynamicModule => {
    return SequelizeModule.forRoot({
        dialect: "postgres",

        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),

        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: false,

        models: [
            User,
            UserToken,
            Company,
            CompanyType,
            CompanyOwner,
            CreditType,
            CreditScheme,
        ],
    });
};
