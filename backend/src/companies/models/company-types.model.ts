import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "companyTypes",
    timestamps: false,
})
export class CompanyType extends Model<CompanyType> {
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
}
