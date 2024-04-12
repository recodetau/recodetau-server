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
}
