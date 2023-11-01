import { Time } from "./time";
import { User } from "@/users/models/users.model";
import { Hash } from "./hash";

export class BearerToken {
    public static generate(): string {
        const tokenLength = Number(process.env.TOKEN_LENGTH);

        return Hash.generate(tokenLength);
    }

    public static validateTokenLife(user: User) {
        if (user.token && user.token_created_at) {
            const tokenLifetime = Number(process.env.TOKEN_LIFETIME);

            const time =
                Time.getCurrentUnixTime() -
                Time.convertToUnixTime(user.token_created_at);

            return time < tokenLifetime;
        }

        return false;
    }
}
