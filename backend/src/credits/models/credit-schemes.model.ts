import {
    Model,
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";

import { CreditType } from "@/credits/models/credit-type.model";

@Table({
    tableName: "creditSchemes",
    timestamps: false,
})
export class CreditScheme extends Model<CreditScheme> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    amount: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    mouths: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    percent: number;

    @ForeignKey(() => CreditType)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    typeID: number;

    @BelongsTo(() => CreditType)
    type: CreditType;
}
