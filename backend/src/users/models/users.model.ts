import {
    Model,
    Table,
    Column,
    DataType,
    BelongsToMany,
} from "sequelize-typescript";
import { Company } from "@/companies/models/componies.model";
import { CompanyOwner } from "@/companies/models/company-owner.model";

export interface UserCreationAttributes {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

@Table({
    tableName: "users",
    timestamps: true,
})
export class User extends Model<User, UserCreationAttributes> {
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
    firstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastName: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @BelongsToMany(() => Company, () => CompanyOwner)
    companies: Company[];
}
