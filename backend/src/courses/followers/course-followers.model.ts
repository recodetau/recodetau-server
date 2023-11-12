import {
    Model,
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";
import { Course } from "../models/courses.model";
import { User } from "@/users/models/users.model";

export interface CourseFollowerCreationAttributes {
    course_id: number;
    user_id: number;
}

@Table({
    tableName: "course_followers",
    createdAt: "created_at",
    updatedAt: "updated_at",
})
export class CourseFollower extends Model<
    CourseFollower,
    CourseFollowerCreationAttributes
> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Course)
    @Column({ type: DataType.INTEGER, allowNull: false })
    course_id: number;

    @BelongsTo(() => Course)
    course: Course;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    user_id: number;

    @BelongsTo(() => User)
    user: User;
}
