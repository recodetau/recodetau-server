import {
    Model,
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";

import { User } from "@/users/models/users.model";

export interface UserTokenCreationAttributes {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

@Table({
    tableName: "user_tokens",
    createdAt: "created_at",
    updatedAt: false,
})
export class UserToken extends Model<UserToken, UserTokenCreationAttributes> {
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
    user_id: number;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    token: string;

    @BelongsTo(() => User)
    user: User;
}
