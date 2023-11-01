import {
    Model,
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";
import { User } from "./users.model";

export interface UserEmailVerifyCreationAttributes {
    user_id: number;
    key: string;
}

@Table({
    tableName: "user_email_verify",
    createdAt: "key_created_at",
    updatedAt: false,
})
export class UserEmailVerify extends Model<
    UserEmailVerify,
    UserEmailVerifyCreationAttributes
> {
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id: number;

    @BelongsTo(() => User)
    user: User;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    key: string;
}
