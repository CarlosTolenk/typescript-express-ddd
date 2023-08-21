import { StatusCodes } from 'http-status-codes';

import { EnumValueObject } from '../../shared/domain/valueObject/EnumValueObject';
import { ErrorHandler } from '../../shared/domain/ErrorHandler';

export enum StatusEnum {
  INITIAL = 'INITIAL',
  CANCELLED = 'CANCELLED',
  FINISHED = 'FINISHED'
}

export class OrderStatus extends EnumValueObject<StatusEnum> {
  constructor(value: StatusEnum) {
    super(value, Object.values(StatusEnum));
  }
  protected throwErrorForInvalidValue(value: StatusEnum): void {
    throw new ErrorHandler(`The filter operator ${value} is invalid`, StatusCodes.BAD_REQUEST);
  }
}
