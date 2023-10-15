import { HttpStatus } from "@nestjs/common";
import { BaseException } from "../base.exception";

export class HasUserException extends BaseException {
    public constructor() {
        super("Такой пользователь уже есть", HttpStatus.BAD_REQUEST);
    }
}
