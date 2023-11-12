import {
    Model,
    Table,
    Column,
    DataType,
    BelongsToMany,
} from "sequelize-typescript";

import { Role } from "@/roles/roles.model";
import { UserRole } from "@/roles/user-role.model";
import { Hash } from "@/utilities/hash";

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

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    email_verified: boolean;

    // ban settings
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    banned: boolean;

    @Column({
        type: DataType.STRING,
    })
    ban_reason: string;

    @Column({
        type: DataType.DATE,
    })
    ban_created_at: Date;

    public ban(banReason: string): void {
        this.banned = true;
        this.ban_reason = banReason;
        this.ban_created_at = new Date();
    }

    public unban(): void {
        this.banned = false;
        this.ban_reason = null;
        this.ban_created_at = null;
    }

    // token settings
    @Column({
        type: DataType.STRING,
    })
    token: string;

    @Column({
        type: DataType.DATE,
    })
    token_created_at: Date;

    public login(): void {
        this.token = Hash.generate(32);
        this.token_created_at = new Date();
    }

    public logout(): void {
        this.token = null;
        this.token_created_at = null;
    }

    // roles settings
    @BelongsToMany(() => Role, () => UserRole)
    roles: Role[];
}
