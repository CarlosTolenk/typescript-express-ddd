export abstract class AggregateRoot<T> {
  protected constructor() {}
  abstract toPrimitives(): T;
}
