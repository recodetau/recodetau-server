import { HttpStatus } from "@nestjs/common";
import { BaseException } from "../base.exception";

export class UnauthorizedException extends BaseException {
    public constructor() {
        super("Пользователь не зарегистрирован", HttpStatus.BAD_REQUEST);
    }
}
