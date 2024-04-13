import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { User } from "@/users/models/users.model";
import { Company } from "@/companies/models/componies.model";
import { CreateCompanyDto } from "@/companies/dto/create-company.dto";
import { CompanyOwner } from "@/companies/models/company-owner.model";

@Injectable()
export class CompaniesService {
    constructor(
        @InjectModel(Company)
        private readonly companyModel: typeof Company,

        @InjectModel(CompanyOwner)
        private readonly companyOwnerModel: typeof CompanyOwner,
    ) {}

    async getAllUserCompanies(user: User): Promise<Company[]> {
        const userCompanies: CompanyOwner[] = await CompanyOwner.findAll({
            where: {
                userID: user.id,
            },
        });

        const userCompanyIDs = userCompanies.map(
            (company) => company.companyID,
        );

        return await Company.findAll({
            where: {
                id: userCompanyIDs,
            },
        });
    }

    async getCompany(companyID: number): Promise<Company> {
        return await Company.findOne({
            where: { id: companyID },
            include: { all: true },
        });
    }

    async createCompany(user: User, dto: CreateCompanyDto): Promise<Company> {
        const { isOwner, ...companyAttributes } = dto;

        const company = await this.companyModel.create({
            ownerID: isOwner ? user.id : null,
            ...companyAttributes,
        });

        await this.companyOwnerModel.create({
            userID: user.id,
            companyID: company.id,
            moderated: true,
        });

        return company;
    }
}
