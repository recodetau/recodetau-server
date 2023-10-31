import {
    Model,
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";

import { User } from "./users.model";

export interface UserTotenCreationAttributes {
    token: string;
    user_id: number;
}

@Table({
    tableName: "user_tokens",
    createdAt: "token_created_at",
    updatedAt: false,
})
export class UserToken extends Model<UserToken, UserTotenCreationAttributes> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        allowNull: false,
    })
    token: string;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id: number;
}
