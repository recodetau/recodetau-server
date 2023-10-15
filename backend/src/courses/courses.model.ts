import {
    Model,
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";

import { Tag } from "@/tags/tags.model";

export interface CourseCreationAttributes {
    title: string;
    description: string;
    image_url: string;
    price: number;
    tag_id: number;
}

@Table({
    tableName: "courses",
    createdAt: "created_at",
    updatedAt: "updated_at",
})
export class Course extends Model<Course, CourseCreationAttributes> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    image_url: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    })
    price: number;

    @ForeignKey(() => Tag)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    tag_id: number;

    @BelongsTo(() => Tag)
    tag: Tag;
}
