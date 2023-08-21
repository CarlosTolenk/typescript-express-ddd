import { v4 } from 'uuid';
import validate from 'uuid-validate';
import { ErrorHandler } from '../ErrorHandler';
import { StatusCodes } from 'http-status-codes';

export class Uuid {
  readonly value: string;

  constructor(value: string) {
    this.ensureIsValidUuid(value);

    this.value = value;
  }

  static random(): Uuid {
    return new Uuid(v4());
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new ErrorHandler(
        `<${this.constructor.name}> does not allow the value <${id}>`,
        StatusCodes.BAD_REQUEST
      );
    }
  }

  toString(): string {
    return this.value;
  }
}
