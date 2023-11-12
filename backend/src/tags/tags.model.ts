import { Model, Table, Column, DataType } from "sequelize-typescript";

export interface TagCreationAttributes {
    name: string;
}

@Table({
    tableName: "tags",
    timestamps: false,
})
export class Tag extends Model<Tag, TagCreationAttributes> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING(30),
        unique: true,
        allowNull: false,
    })
    name: string;
}
