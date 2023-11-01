import { HttpStatus } from "@nestjs/common";
import { BaseException } from "@/exceptions/base.exception";

export class BannedException extends BaseException {
    public constructor(banReason: string) {
        super("Аккаунт забанен, причина: " + banReason, HttpStatus.FORBIDDEN);
    }
}
