import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { CreditScheme } from "@/credits/models/credit-schemes.model";
import { CreditType } from "@/credits/models/credit-type.model";

@Injectable()
export class CreditsService {
    constructor(
        @InjectModel(CreditScheme)
        private readonly creditSchemeModel: typeof CreditScheme,

        @InjectModel(CreditType)
        private readonly creditTypeModel: typeof CreditType,
    ) {}

    async getCreditSchemesByType(typeID: number): Promise<CreditScheme[]> {
        return await this.creditSchemeModel.findAll({
            where: {
                typeID,
            },
        });
    }

    async getAllCreditTypes(): Promise<CreditType[]> {
        return await this.creditTypeModel.findAll();
    }
}
