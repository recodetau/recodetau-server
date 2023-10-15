import { Model, Table, Column, DataType } from "sequelize-typescript";

export interface TagCreationAttributes {
    name: string;
    short_description: string;
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

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    short_description: string;
}
