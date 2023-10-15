import { BearerToken } from "@/utilities/bearer-token";
import { Model, Table, Column, DataType } from "sequelize-typescript";

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
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    first_name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    last_name: string;

    @Column({
        type: DataType.INTEGER,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.INTEGER,
    })
    token: string;

    @Column({
        type: DataType.DATE,
    })
    token_created_at: Date;

    @Column({
        type: DataType.INTEGER,
    })
    phone: string;

    @Column({
        type: DataType.INTEGER,
    })
    about_me: string;

    @Column({
        type: DataType.INTEGER,
    })
    avatar_url: string;

    updateTokenOptions() {
        this.token = BearerToken.generate();
        this.token_created_at = new Date();
    }

    removeTokenOptions() {
        this.token = null;
        this.token_created_at = null;
    }
}