import {
    Model,
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";

import { User } from "@/users/models/users.model";
import { Company } from "@/companies/models/componies.model";

export interface CompanyOwnerCreationAttributes {
    userID: number;
    companyID: number;
    moderated?: boolean;
}

@Table({
    tableName: "companyOwners",
    timestamps: true,
})
export class CompanyOwner extends Model<
    CompanyOwner,
    CompanyOwnerCreationAttributes
> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    userID: number;

    @ForeignKey(() => Company)
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    companyID: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    moderated: boolean;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Company)
    company: Company;
}
