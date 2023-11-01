import {
    Model,
    Table,
    Column,
    DataType,
    ForeignKey,
} from "sequelize-typescript";

import { Role } from "./roles.model";
import { User } from "@/users/models/users.model";

export enum CompanyRole {
    Owner = "owner",
    Administrator = "administrator",
    Redactor = "redactor",
    Moderator = "moderator",
}

export interface UserRoleCreationAttributes {
    user_id: number;
    role_id: number;
}

@Table({
    tableName: "user_roles",
    createdAt: "created_at",
    updatedAt: "updated_at",
})
export class UserRole extends Model<UserRole, UserRoleCreationAttributes> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id: number;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    role_id: number;
}
