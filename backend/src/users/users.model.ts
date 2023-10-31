import {
    Model,
    Table,
    Column,
    DataType,
    BelongsToMany,
} from "sequelize-typescript";

import { Role } from "@/roles/roles.model";
import { UserRole } from "@/roles/user-role.model";

export interface UserCreationAttributes {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

@Table({
    tableName: "users",
    createdAt: "created_at",
    updatedAt: "updated_at",
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
    first_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name: string;

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

    @Column({
        type: DataType.STRING,
    })
    phone: string;

    @Column({
        type: DataType.STRING,
    })
    about_me: string;

    @Column({
        type: DataType.STRING,
    })
    avatar_url: string;

    @BelongsToMany(() => Role, () => UserRole)
    roles: Role[];
}
