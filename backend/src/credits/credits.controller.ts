import { Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";

import { CreditScheme } from "@/credits/models/credit-schemes.model";
import { CreditsService } from "@/credits/credits.service";
import { CreditType } from "@/credits/models/credit-type.model";

@Controller()
export class CreditsController {
    constructor(private readonly creditsService: CreditsService) {}

    @Get("/types")
    async getAllCreditTypes(): Promise<CreditType[]> {
        return await this.creditsService.getAllCreditTypes();
    }

    @Get("/schemes/:typeID")
    async getCreditSchemesByType(
        @Param("typeID", ParseIntPipe) typeID: number,
    ): Promise<CreditScheme[]> {
        return await this.creditsService.getCreditSchemesByType(typeID);
    }

    // TODO: Сделать если останеться время
    @Post("/create-user-credit")
    async createUserCredit() {
        return null;
    }
}
