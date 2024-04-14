import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "creditTypes",
    timestamps: false,
})
export class CreditType extends Model<CreditType> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    maxMouths: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    percent: number;
}
