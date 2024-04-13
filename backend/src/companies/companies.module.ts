import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { CompaniesService } from "./companies.service";
import { CompaniesController } from "./companies.controller";

import { Company } from "@/companies/models/componies.model";
import { CompanyOwner } from "@/companies/models/company-owner.model";
import { CompanyType } from "@/companies/models/company-types.model";

@Module({
    providers: [CompaniesService],
    controllers: [CompaniesController],
    imports: [SequelizeModule.forFeature([Company, CompanyOwner, CompanyType])],
})
export class CompaniesModule {}
