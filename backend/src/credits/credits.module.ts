import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { CreditsController } from "./credits.controller";
import { CreditsService } from "./credits.service";

import { CreditScheme } from "@/credits/models/credit-schemes.model";
import { CreditType } from "@/credits/models/credit-type.model";

@Module({
    controllers: [CreditsController],
    providers: [CreditsService],
    imports: [SequelizeModule.forFeature([CreditScheme, CreditType])],
})
export class CreditsModule {}
