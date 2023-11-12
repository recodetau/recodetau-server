import { Tag } from "@/tags/tags.model";
import { User } from "@/users/models/users.model";
import {
    Model,
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";

export interface PostCreationAttributes {
    title: string;
    content: string;
    image_url: string;
    tag_id: number;
    author_id: number;
}

@Table({
    tableName: "posts",
    createdAt: "created_at",
    updatedAt: "updated_at",
})
export class Post extends Model<Post, PostCreationAttributes> {
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
    content: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    image_url: string;

    @ForeignKey(() => Tag)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    tag_id: number;

    @BelongsTo(() => Tag)
    tag: Tag;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    author_id: number;

    @BelongsTo(() => User)
    author: User;
}
