import { Model, Table, Column, DataType } from "sequelize-typescript";

export enum Role {
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

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    role_id: number;
}
