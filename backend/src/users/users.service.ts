import * as bcrypt from "bcryptjs";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { User, UserCreationAttributes } from "./users.model";
import { UpdateUserDto } from "./dto/update-user.dto";

const USER_EXCLUDE_COLUMN = ["password", "token", "token_created_at"];

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private readonly userModel: typeof User) {}

    async getUserByID(userID: number): Promise<User> {
        const user = await this.userModel.findOne({
            where: {
                id: userID,
            },
            include: { all: true },
            attributes: {
                exclude: USER_EXCLUDE_COLUMN,
            },
        });

        return user;
    }

    async getUserByEmail(userEmail: string): Promise<User> {
        const user: User = await this.userModel.findOne({
            where: {
                email: userEmail,
            },
        });

        return user;
    }

    async getUserByAPIToken(userAccesToken: string): Promise<User> {
        const user: User = await this.userModel.findOne({
            where: {
                token: userAccesToken,
            },
            include: {
                all: true,
            },
        });

        return user;
    }

    async createUser(userData: UserCreationAttributes): Promise<User> {
        const PasswordSalt = Number(process.env.PASSWORD_SALT);

        userData.password = await bcrypt.hash(userData.password, PasswordSalt);

        const user: User = await this.userModel.create(userData);

        user.updateTokenOptions();
        await user.save();

        return user;
    }

    async updateCurrentUser(
        user: User,
        updateUserDto: UpdateUserDto,
    ): Promise<void> {
        await user.update(updateUserDto);
    }
}
