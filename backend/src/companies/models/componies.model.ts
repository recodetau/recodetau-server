import {
    Model,
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
    BelongsToMany,
} from "sequelize-typescript";

import { CompanyType } from "@/companies/models/company-types.model";
import { User } from "@/users/models/users.model";
import { CompanyOwner } from "@/companies/models/company-owner.model";

export interface CompanyCreationAttributes {
    name: string;
    inn: string;
    ownerID?: number;
    creditCard: string;
    typeID: number;
}

@Table({
    tableName: "companies",
    timestamps: true,
})
export class Company extends Model<Company, CompanyCreationAttributes> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING(30),
        allowNull: false,
        unique: true,
    })
    inn: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    ownerID?: number;

    @Column({
        type: DataType.STRING(30),
        allowNull: false,
    })
    creditCard: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    moderated: boolean;

    @ForeignKey(() => CompanyType)
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    typeID: number;

    @BelongsTo(() => User)
    owner: User;

    @BelongsTo(() => CompanyType)
    type: CompanyType;

    @BelongsToMany(() => User, () => CompanyOwner)
    owners: User[];
}
