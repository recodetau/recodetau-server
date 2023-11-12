import { Model, Table, Column, DataType } from "sequelize-typescript";

export interface RoleCreationAttributes {
    name: string;
}

@Table({
    tableName: "roles",
    timestamps: false,
})
export class Role extends Model<Role, RoleCreationAttributes> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    name: string;
}
