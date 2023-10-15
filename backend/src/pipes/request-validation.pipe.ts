import { RequestValidationException } from "@/exceptions/request-validation.exception";
import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

@Injectable()
export class RequestValidationPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        if (metadata.type !== "body") {
            return value;
        }

        const obj = plainToClass(metadata.metatype, value);
        const errors = await validate(obj);

        if (errors.length) {
            const messages = {};

            errors.forEach((errorItem) => {
                messages[errorItem.property] = Object.keys(
                    errorItem.constraints,
                ).forEach((errorType) => {
                    return errorItem.constraints[errorType];
                });
            });

            throw new RequestValidationException(messages);
        }

        return value;
    }
}
