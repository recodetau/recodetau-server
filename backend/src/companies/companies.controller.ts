import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Req,
} from "@nestjs/common";

import { AuthenticatedRequest } from "@/types/requests";
import { CompaniesService } from "@/companies/companies.service";
import { Company } from "@/companies/models/componies.model";
import { CreateCompanyDto } from "@/companies/dto/create-company.dto";

@Controller()
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {}

    @Get("my")
    async getAllUserCompanies(
        @Req() request: AuthenticatedRequest,
    ): Promise<Company[]> {
        return await this.companiesService.getAllUserCompanies(request.user);
    }

    @Get(":id")
    async getCompany(@Param("id", ParseIntPipe) companyID: number) {
        return await this.companiesService.getCompany(companyID);
    }

    @Post()
    async createCompany(
        @Req() request: AuthenticatedRequest,
        @Body() dto: CreateCompanyDto,
    ): Promise<Company> {
        return await this.companiesService.createCompany(request.user, dto);
    }
}
